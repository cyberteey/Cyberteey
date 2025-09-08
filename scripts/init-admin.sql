-- Create admin user
-- Run this script after setting up the database

INSERT INTO users (id, email, password, role, name, created_at, updated_at)
VALUES (
  'admin-user-id',
  'admin@cybercrimelab.com',
  '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg/9qK', -- password: admin123
  'admin',
  'System Administrator',
  NOW(),
  NOW()
) ON CONFLICT (email) DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_complaints_tracking_id ON complaints(tracking_id);
CREATE INDEX IF NOT EXISTS idx_complaints_status ON complaints(status);
CREATE INDEX IF NOT EXISTS idx_complaints_created_at ON complaints(created_at);

CREATE INDEX IF NOT EXISTS idx_recovery_requests_tracking_id ON recovery_requests(tracking_id);
CREATE INDEX IF NOT EXISTS idx_recovery_requests_status ON recovery_requests(status);
CREATE INDEX IF NOT EXISTS idx_recovery_requests_created_at ON recovery_requests(created_at);

CREATE INDEX IF NOT EXISTS idx_notes_complaint_id ON notes(complaint_id);
CREATE INDEX IF NOT EXISTS idx_notes_recovery_request_id ON notes(recovery_request_id);
CREATE INDEX IF NOT EXISTS idx_notes_created_at ON notes(created_at);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at);
