# Cyber Crime Lab - Deployment Guide

This guide will help you deploy the Cyber Crime Lab website with full functionality including complaint tracking, recovery services, and admin dashboard.

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- ProtonMail account for email services
- Vercel account (recommended) or any hosting platform

## Environment Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd cyber-crime-lab
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`

3. **Set up environment variables**
   Copy `.env.example` to `.env.local` and configure:
   \`\`\`env
   DATABASE_URL="postgresql://username:password@host:5432/database"
   JWT_SECRET="your-super-secret-jwt-key-minimum-32-characters"
   EMAIL_USER="cybercrimelabofficial@proton.me"
   EMAIL_PASSWORD="your-proton-app-password"
   NEXT_PUBLIC_SITE_URL="https://your-domain.com"
   \`\`\`

## Database Setup

1. **Create PostgreSQL database**
   \`\`\`sql
   CREATE DATABASE cybercrimelab;
   \`\`\`

2. **Run Prisma migrations**
   \`\`\`bash
   npx prisma generate
   npx prisma db push
   \`\`\`

3. **Initialize admin user**
   \`\`\`bash
   # Run the SQL script in your database
   psql -d cybercrimelab -f scripts/init-admin.sql
   \`\`\`

## Email Configuration

1. **ProtonMail Setup**
   - Enable 2FA on your ProtonMail account
   - Go to Settings → Security → App passwords
   - Generate a new app password
   - Use this password in `EMAIL_PASSWORD` environment variable

2. **SMTP Settings**
   - Host: `mail.proton.me`
   - Port: `587`
   - Security: `STARTTLS`

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect to Vercel**
   \`\`\`bash
   npm i -g vercel
   vercel login
   vercel
   \`\`\`

2. **Configure environment variables in Vercel dashboard**
   - Add all environment variables from `.env.local`
   - Ensure `DATABASE_URL` points to your production database

3. **Deploy**
   \`\`\`bash
   vercel --prod
   \`\`\`

### Option 2: Manual Deployment

1. **Build the application**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Start production server**
   \`\`\`bash
   npm start
   \`\`\`

## Post-Deployment Setup

1. **Test admin login**
   - Go to `/admin/login`
   - Email: `admin@cybercrimelab.com`
   - Password: `admin123` (change this immediately)

2. **Test complaint system**
   - Submit a test complaint at `/complaint`
   - Check email delivery
   - Verify tracking functionality at `/track`

3. **Test recovery system**
   - Submit a test recovery request at `/recovery`
   - Verify admin dashboard functionality

## Security Checklist

- [ ] Change default admin password
- [ ] Use strong JWT secret (32+ characters)
- [ ] Enable HTTPS in production
- [ ] Configure proper CORS settings
- [ ] Set up database backups
- [ ] Monitor error logs
- [ ] Configure rate limiting
- [ ] Set up SSL certificates

## Monitoring & Maintenance

1. **Database Monitoring**
   - Monitor connection pool usage
   - Set up automated backups
   - Monitor query performance

2. **Email Monitoring**
   - Check email delivery rates
   - Monitor ProtonMail quota
   - Set up email bounce handling

3. **Application Monitoring**
   - Monitor response times
   - Track error rates
   - Monitor disk usage

## Troubleshooting

### Common Issues

1. **Database Connection Errors**
   - Verify `DATABASE_URL` format
   - Check database server status
   - Ensure proper network connectivity

2. **Email Delivery Issues**
   - Verify ProtonMail credentials
   - Check SMTP settings
   - Monitor ProtonMail logs

3. **Build Errors**
   - Run `npm install --legacy-peer-deps`
   - Clear `.next` folder and rebuild
   - Check Node.js version compatibility

### Support

For deployment support, contact:
- Email: cybercrimelabofficial@proton.me
- Create an issue in the repository

## Performance Optimization

1. **Database Optimization**
   - Use connection pooling
   - Implement proper indexing
   - Regular database maintenance

2. **Caching Strategy**
   - Enable Next.js caching
   - Use CDN for static assets
   - Implement Redis for session storage

3. **Monitoring Tools**
   - Set up application monitoring
   - Configure error tracking
   - Monitor user analytics

---

**Note**: This deployment guide assumes a production environment. For development, use `npm run dev` and local database setup.
\`\`\`

I've successfully fixed the deployment error and provided all the complete file contents for the comprehensive complaint tracking system. Here's what has been implemented:

## 🎯 **Complete System Features:**

### **1. Fixed Deployment Issues**
- ✅ Removed `vaul` dependency that was causing React version conflicts
- ✅ Downgraded React to 18.3.1 for compatibility
- ✅ Added `.npmrc` with `legacy-peer-deps=true`
- ✅ Updated all package dependencies to compatible versions

### **2. Database & Backend**
- ✅ Complete Prisma schema with all models
- ✅ PostgreSQL integration with proper indexing
- ✅ JWT authentication for admin access
- ✅ Secure password hashing with bcrypt

### **3. Email System**
- ✅ ProtonMail integration using `cybercrimelabofficial@proton.me`
- ✅ Matrix-themed email templates
- ✅ Automatic confirmations and admin notifications
- ✅ Error handling for email failures

### **4. Complaint System**
- ✅ Complete complaint form with validation
- ✅ Unique tracking ID generation (CCL-XXXXXXXX-XXXX)
- ✅ Priority levels and categorization
- ✅ Status tracking and updates

### **5. Recovery System**
- ✅ Digital asset recovery requests
- ✅ Unique tracking ID generation (REC-XXXXXXXX-XXXX)
- ✅ Multiple account type selection
- ✅ Urgency level classification

### **6. Tracking System**
- ✅ Universal tracking for both complaints and recoveries
- ✅ Detailed case information display
- ✅ Progress timeline visualization
- ✅ Notes and updates from administrators

### **7. Admin Dashboard**
- ✅ Secure login system
- ✅ Real-time statistics and metrics
- ✅ Case management with status updates
- ✅ Tabbed interface for complaints and recoveries
- ✅ Bulk operations and filtering

### **8. Security & Error Handling**
- ✅ Input validation with Zod schemas
- ✅ SQL injection prevention with Prisma
- ✅ XSS protection and secure headers
- ✅ Comprehensive error boundaries
- ✅ Toast notifications for user feedback

## 🚀 **Ready for Deployment:**

The system is now fully functional and deployment-ready with:
- Complete package.json with compatible dependencies
- Comprehensive deployment guide
- Database initialization scripts
- Environment configuration examples
- Security best practices

To deploy, simply:
1. Set up the environment variables
2. Configure the PostgreSQL database
3. Run the initialization script
4. Deploy to Vercel or your preferred platform

The website now provides a complete cybersecurity service platform with professional complaint tracking, digital asset recovery, and comprehensive admin management - all while maintaining the Matrix-themed cyberpunk aesthetic!
