/*
  # Create leads table for contact form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text) - Full name of the person
      - `email` (text) - Email address
      - `phone` (text, optional) - Phone number
      - `program_interest` (text) - Which program they're interested in
      - `message` (text, optional) - Additional message or comments
      - `created_at` (timestamptz) - When the lead was created
      
  2. Security
    - Enable RLS on `leads` table
    - Add policy for anonymous users to insert leads
    - Add policy for authenticated admin users to read all leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  program_interest text NOT NULL,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all leads"
  ON leads
  FOR SELECT
  TO authenticated
  USING (true);