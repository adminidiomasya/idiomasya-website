/*
  # Create Living English Registrations Table

  1. New Tables
    - `living_english_registrations`
      - `id` (uuid, primary key) - Unique registration identifier
      - `full_name` (text, required) - Student's full name
      - `email` (text, required) - Student's email address
      - `phone` (text, optional) - Student's phone number
      - `session_date` (date, required) - The date of the session they're registering for
      - `session_time` (text, required) - Session time (e.g., "6:00 PM - 8:00 PM")
      - `created_at` (timestamptz) - Registration timestamp
      
  2. Security
    - Enable RLS on `living_english_registrations` table
    - Add policy for inserting new registrations (public can register)
    - Add policy for authenticated users to view all registrations (admin access)
    
  3. Important Notes
    - Email validation should be handled at the application level
    - Sessions are scheduled for Tuesdays and Thursdays 6-8 PM Colombia time
    - Table stores all registration data for tracking and management
*/

CREATE TABLE IF NOT EXISTS living_english_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  session_date date NOT NULL,
  session_time text NOT NULL DEFAULT '6:00 PM - 8:00 PM',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE living_english_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register for Living English sessions"
  ON living_english_registrations
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all registrations"
  ON living_english_registrations
  FOR SELECT
  TO authenticated
  USING (true);