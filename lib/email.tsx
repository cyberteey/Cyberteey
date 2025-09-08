import nodemailer from "nodemailer"

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendComplaintConfirmation(email: string, name: string, trackingId: string, category: string) {
  const mailOptions = {
    from: process.env.FROM_EMAIL || "cybercrimelabofficial@proton.me",
    to: email,
    subject: `Complaint Received - Tracking ID: ${trackingId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Cyberteey Crime Lab</h1>
          <p style="color: #e0e7ff; margin: 10px 0 0 0;">Professional Cybersecurity Services</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Complaint Received Successfully</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting Cyberteey Crime Lab. We have received your complaint and assigned it a tracking ID for your reference.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #1e40af;">Case Details:</h3>
            <p><strong>Tracking ID:</strong> ${trackingId}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Status:</strong> Pending Review</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <h3 style="color: #1e40af;">What happens next?</h3>
          <ul style="color: #475569;">
            <li>Our expert team will review your case within 24-48 hours</li>
            <li>You will receive updates via email as we progress</li>
            <li>You can track your case status anytime using your tracking ID</li>
            <li>Our team may contact you for additional information if needed</li>
          </ul>
          
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1e40af;"><strong>Track your case:</strong> Visit our tracking page and enter your tracking ID: ${trackingId}</p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to contact us at cybercrimelabofficial@proton.me</p>
          
          <p>Best regards,<br>
          <strong>Cyberteey Crime Lab Team</strong><br>
          Professional Cybersecurity Services</p>
        </div>
        
        <div style="background: #1e293b; padding: 20px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            © 2024 Cyberteey Crime Lab. All rights reserved.<br>
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

export async function sendRecoveryConfirmation(
  email: string,
  name: string,
  trackingId: string,
  recoveryType: string,
  assetType: string,
) {
  const mailOptions = {
    from: process.env.FROM_EMAIL || "cybercrimelabofficial@proton.me",
    to: email,
    subject: `Recovery Request Received - Tracking ID: ${trackingId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #059669, #10b981); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Cyberteey Crime Lab</h1>
          <p style="color: #d1fae5; margin: 10px 0 0 0;">Digital Asset Recovery Services</p>
        </div>
        
        <div style="padding: 30px; background: #f0fdf4;">
          <h2 style="color: #059669; margin-bottom: 20px;">Recovery Request Received</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for choosing Cyberteey Crime Lab for your digital asset recovery needs. We have received your request and our expert recovery team is ready to assist you.</p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #059669;">Recovery Details:</h3>
            <p><strong>Tracking ID:</strong> ${trackingId}</p>
            <p><strong>Recovery Type:</strong> ${recoveryType}</p>
            <p><strong>Asset Type:</strong> ${assetType}</p>
            <p><strong>Status:</strong> Initial Assessment</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #059669; margin: 0 0 15px 0;">Our Recovery Process:</h3>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 24px; height: 24px; background: #10b981; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">1</div>
                <span style="color: #065f46;">Initial Assessment & Case Review (24-48 hours)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 24px; height: 24px; background: #6b7280; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">2</div>
                <span style="color: #065f46;">Technical Analysis & Recovery Planning (2-5 days)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 24px; height: 24px; background: #6b7280; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">3</div>
                <span style="color: #065f46;">Active Recovery Process (5-14 days)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 24px; height: 24px; background: #6b7280; border-radius: 50%; color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">4</div>
                <span style="color: #065f46;">Asset Return & Case Closure</span>
              </div>
            </div>
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;"><strong>Success Rate:</strong> Our team has achieved a 94.2% success rate in digital asset recovery cases.</p>
          </div>
          
          <p>You can track your recovery progress anytime using your tracking ID: <strong>${trackingId}</strong></p>
          
          <p>Our recovery specialists may contact you within 24 hours to discuss your case in detail and gather any additional information needed.</p>
          
          <p>Best regards,<br>
          <strong>Cyberteey Recovery Team</strong><br>
          Digital Asset Recovery Specialists</p>
        </div>
        
        <div style="background: #1e293b; padding: 20px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            © 2024 Cyberteey Crime Lab. All rights reserved.<br>
            For urgent matters, contact: cybercrimelabofficial@proton.me
          </p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}

export async function sendStatusUpdate(
  email: string,
  name: string,
  trackingId: string,
  newStatus: string,
  type: "complaint" | "recovery",
  note?: string,
) {
  const isRecovery = type === "recovery"
  const subject = `${isRecovery ? "Recovery" : "Complaint"} Status Update - ${trackingId}`

  const mailOptions = {
    from: process.env.FROM_EMAIL || "cybercrimelabofficial@proton.me",
    to: email,
    subject,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, ${isRecovery ? "#059669, #10b981" : "#1e3a8a, #3b82f6"}); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">Cyberteey Crime Lab</h1>
          <p style="color: ${isRecovery ? "#d1fae5" : "#e0e7ff"}; margin: 10px 0 0 0;">Case Status Update</p>
        </div>
        
        <div style="padding: 30px; background: #f8fafc;">
          <h2 style="color: ${isRecovery ? "#059669" : "#1e40af"}; margin-bottom: 20px;">Status Update</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have an update regarding your ${isRecovery ? "recovery request" : "complaint"} with tracking ID: <strong>${trackingId}</strong></p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid ${isRecovery ? "#10b981" : "#3b82f6"}; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: ${isRecovery ? "#059669" : "#1e40af"};">New Status: ${newStatus}</h3>
            <p><strong>Updated:</strong> ${new Date().toLocaleString()}</p>
            ${note ? `<p><strong>Note:</strong> ${note}</p>` : ""}
          </div>
          
          <p>You can continue to track your case progress using your tracking ID on our website.</p>
          
          <p>If you have any questions about this update, please don't hesitate to contact us.</p>
          
          <p>Best regards,<br>
          <strong>Cyberteey Crime Lab Team</strong></p>
        </div>
        
        <div style="background: #1e293b; padding: 20px; text-align: center;">
          <p style="color: #94a3b8; margin: 0; font-size: 14px;">
            © 2024 Cyberteey Crime Lab. All rights reserved.
          </p>
        </div>
      </div>
    `,
  }

  await transporter.sendMail(mailOptions)
}
