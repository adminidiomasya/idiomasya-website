/*
  # Add Email Notification Triggers

  1. Changes
    - Creates a function to invoke the email notification edge function
    - Adds trigger on `leads` table to send email on new insertions
    - Adds trigger on `living_english_registrations` table to send email on new insertions

  2. Security
    - Uses Supabase's `supabase_functions_admin` role to invoke edge functions
    - Triggers fire automatically after successful row insertion
*/

-- Create function to invoke email notification edge function
CREATE OR REPLACE FUNCTION notify_admin_on_form_submission()
RETURNS TRIGGER AS $$
DECLARE
  request_id bigint;
  function_url text;
BEGIN
  -- Get the Supabase project URL from settings
  function_url := current_setting('app.settings.supabase_url', true) || '/functions/v1/send-form-notification';
  
  -- If URL is not set in settings, construct it from the request
  IF function_url IS NULL OR function_url = '/functions/v1/send-form-notification' THEN
    function_url := 'https://' || current_setting('request.headers', true)::json->>'host' || '/functions/v1/send-form-notification';
  END IF;

  -- Make async HTTP request to edge function
  SELECT INTO request_id
    net.http_post(
      url := function_url,
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := jsonb_build_object(
        'table', TG_TABLE_NAME,
        'record', row_to_json(NEW)
      )
    );

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- Log error but don't fail the insert
    RAISE WARNING 'Failed to send email notification: %', SQLERRM;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for leads table
DROP TRIGGER IF EXISTS on_lead_created ON leads;
CREATE TRIGGER on_lead_created
  AFTER INSERT ON leads
  FOR EACH ROW
  EXECUTE FUNCTION notify_admin_on_form_submission();

-- Create trigger for living_english_registrations table
DROP TRIGGER IF EXISTS on_living_english_registration_created ON living_english_registrations;
CREATE TRIGGER on_living_english_registration_created
  AFTER INSERT ON living_english_registrations
  FOR EACH ROW
  EXECUTE FUNCTION notify_admin_on_form_submission();
