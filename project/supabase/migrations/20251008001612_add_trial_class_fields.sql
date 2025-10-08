/*
  # Add trial class scheduling fields to leads table

  1. Changes
    - Add `preferred_day` column to store the day of week for trial class
    - Add `preferred_time` column to store the preferred time slot
    
  2. Details
    - `preferred_day` (text, optional) - Day of week (Monday-Saturday) for trial class
    - `preferred_time` (text, optional) - Preferred time slot (6 AM - 9 PM)
    - These fields are optional and only used when scheduling trial classes
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'preferred_day'
  ) THEN
    ALTER TABLE leads ADD COLUMN preferred_day text;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'leads' AND column_name = 'preferred_time'
  ) THEN
    ALTER TABLE leads ADD COLUMN preferred_time text;
  END IF;
END $$;