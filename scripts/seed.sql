-- Create admin user
INSERT INTO users (id, email, name, role, password, created_at, updated_at)
VALUES (
  'admin_user_id',
  'admin@cyberteey.com',
  'System Administrator',
  'SUPER_ADMIN',
  '$2a$12$LQv3c1yqBWVHxkd0LQ4YCOuLQv3c1yqBWVHxkd0LQ4YCOuLQv3c1y', -- hashed password: admin123
  NOW(),
  NOW()
) ON CONFLICT (email) DO NOTHING;

-- Sample complaint categories and their descriptions
INSERT INTO complaints (id, tracking_id, name, email, category, priority, subject, description, status, created_at, updated_at)
VALUES 
  (
    'sample_complaint_1',
    'CMP' || EXTRACT(EPOCH FROM NOW())::bigint || FLOOR(RANDOM() * 1000),
    'John Doe',
    'john.doe@example.com',
    'CRYPTOCURRENCY_THEFT',
    'HIGH',
    'Bitcoin wallet compromised',
    'My Bitcoin wallet was hacked and 2.5 BTC was stolen. I have transaction IDs and suspect it happened through a phishing email.',
    'IN_PROGRESS',
    NOW() - INTERVAL '2 days',
    NOW() - INTERVAL '1 day'
  ),
  (
    'sample_complaint_2',
    'CMP' || EXTRACT(EPOCH FROM NOW())::bigint || FLOOR(RANDOM() * 1000),
    'Jane Smith',
    'jane.smith@example.com',
    'IDENTITY_THEFT',
    'URGENT',
    'Social media accounts hacked',
    'All my social media accounts were compromised. The attacker is posting malicious content and asking my contacts for money.',
    'INVESTIGATING',
    NOW() - INTERVAL '1 day',
    NOW()
  );

-- Sample recovery requests
INSERT INTO recoveries (id, tracking_id, name, email, recovery_type, asset_type, description, loss_amount, status, created_at, updated_at)
VALUES 
  (
    'sample_recovery_1',
    'REC' || EXTRACT(EPOCH FROM NOW())::bigint || FLOOR(RANDOM() * 1000),
    'Mike Johnson',
    'mike.johnson@example.com',
    'CRYPTOCURRENCY_RECOVERY',
    'CRYPTOCURRENCY',
    'Lost access to my Ethereum wallet after computer crash. I have the seed phrase but the wallet shows zero balance.',
    '15 ETH (~$30,000)',
    'ANALYZING',
    NOW() - INTERVAL '3 days',
    NOW() - INTERVAL '1 day'
  ),
  (
    'sample_recovery_2',
    'REC' || EXTRACT(EPOCH FROM NOW())::bigint || FLOOR(RANDOM() * 1000),
    'Sarah Wilson',
    'sarah.wilson@example.com',
    'EMAIL_RECOVERY',
    'EMAIL_ACCOUNT',
    'My business email account was compromised and I lost access. The attacker changed all recovery options.',
    'N/A',
    'RECOVERING',
    NOW() - INTERVAL '5 days',
    NOW()
  );

-- Sample notes for cases
INSERT INTO notes (id, content, author_id, complaint_id, created_at)
VALUES 
  (
    'note_1',
    'Initial assessment completed. Case has been assigned to our cryptocurrency recovery specialist team. Blockchain analysis in progress.',
    'admin_user_id',
    'sample_complaint_1',
    NOW() - INTERVAL '1 day'
  ),
  (
    'note_2',
    'Social media platforms have been contacted. Account recovery process initiated with Facebook, Instagram, and Twitter.',
    'admin_user_id',
    'sample_complaint_2',
    NOW() - INTERVAL '12 hours'
  );

INSERT INTO notes (id, content, author_id, recovery_id, created_at)
VALUES 
  (
    'note_3',
    'Wallet analysis shows transactions to multiple addresses. Tracing blockchain movements to identify recovery possibilities.',
    'admin_user_id',
    'sample_recovery_1',
    NOW() - INTERVAL '2 days'
  ),
  (
    'note_4',
    'Email provider cooperation secured. Working with their security team to restore account access while preserving evidence.',
    'admin_user_id',
    'sample_recovery_2',
    NOW() - INTERVAL '6 hours'
  );
