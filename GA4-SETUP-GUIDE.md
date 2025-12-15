# Google Analytics 4 (GA4) Setup Guide - Bélharmore Florist

## 🎯 **Objective**
Add GA4 tracking to your Belharmore Florist website to monitor visitor behavior, popular pages, and customer conversion patterns.

## 📋 **Step-by-Step GA4 Setup**

### **Step 1: Create GA4 Property**

1. **Sign in to Google Analytics**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Sign in with your Google account (same as belharmore@gmail.com)

2. **Create New Property**
   - Click **"Start measuring"** or **"Create account"**
   - **Account name**: `Bélharmore Studio`
   - **Property name**: `Bélharmore Florist Website`
   - **Time zone**: `Asia/Jakarta` (GMT+7)
   - **Currency**: `Indonesian Rupiah (IDR)`
   - Click **"Next"**

3. **Business Information**
   - **Industry**: `Retail & E-commerce`
   - **Business size**: `Small` (1-10 employees)
   - Click **"Create"**

4. **Data Collection Setup**
   - **Platform**: Select **"Web"** (since this is a website)
   - **Website URL**: `belharmoreflorist.netlify.app` (or your actual domain)
   - **Stream name**: `Belharmore Florist Website`
   - Click **"Create stream"**

### **Step 2: Get Your Measurement ID**

1. **Find Your Measurement ID**
   - After creating the stream, you'll see a **"Measurement ID"**
   - It looks like: `G-XXXXXXXXXX` (replace X's with your actual ID)
   - **Copy this ID** - you'll need it for the website code

2. **Example**: Your ID might be something like:
   ```
   G-ABC123XYZ4
   ```

### **Step 3: Install Tracking Code**

1. **Copy the tracking code** (provided in the next section)
2. **Replace `G-MEASUREMENT_ID`** with your actual Measurement ID
3. **Add the code** to both HTML files:
   - `index-enhanced.html` (main page)
   - `thank-you.html` (confirmation page)

### **Step 4: Verify Installation**

1. **Open your website** in a new browser tab
2. **Check the Realtime Report**:
   - Go to GA4 → Reports → Realtime
   - You should see **1 active user** (yourself)
   - Page views should be tracking correctly

## 🔍 **How to Access GA4 Reports**

### **Main Dashboard**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Click on your **"Bélharmore Florist Website"** property
3. View the **"Reports"** section

### **Key Reports to Monitor**
- **Realtime**: Live visitor activity
- **Acquisition**: Where your visitors come from
- **Engagement**: Most popular pages, time on site
- **Conversions**: Form submissions, goal completions

### **Realtime Report Access**
1. **GA4 Dashboard** → **Reports** → **Realtime**
2. Shows current active users (last 30 minutes)
3. Real-time page views and user activity
4. Device types and traffic sources

## 📊 **What GA4 Will Track**

### **Automatic Tracking**
- **Page Views**: Every time someone visits a page
- **User Sessions**: Group of interactions within 30 minutes
- **Bounce Rate**: Visitors who leave after one page
- **Session Duration**: How long people stay on your site

### **Bilingual Tracking**
- **Language Switches**: GA4 will track when users switch between English/Indonesian
- **Content Engagement**: See which language content gets more engagement

### **Form Conversion Tracking**
- **Thank You Page Views**: Tracks form submission success
- **Customer Journey**: How users navigate before submitting forms

## 🎯 **Key Metrics to Monitor**

### **Business Growth Metrics**
1. **Weekly Visitors**: Track website traffic growth
2. **Popular Pages**: Which flower arrangements get most views
3. **Conversion Rate**: % of visitors who submit inquiry forms
4. **Traffic Sources**: Social media, Google search, direct visits

### **Marketing Insights**
1. **Peak Traffic Hours**: When your site is most popular
2. **Device Usage**: Mobile vs desktop visitors
3. **Geographic Data**: Where your customers are located
4. **User Journey**: Most common path to form submission

## 🛠 **Next Steps After Setup**

### **1. Set Up Conversion Goals**
- Form submissions as conversions
- Track customer inquiry volume

### **2. Create Custom Reports**
- Weekly traffic summary
- Most popular flower arrangements
- Language preference analytics

### **3. Marketing Optimization**
- Use data to improve SEO
- Focus on popular content types
- Optimize for mobile users

## ⚡ **Quick Verification Checklist**

- [ ] GA4 property created
- [ ] Measurement ID copied
- [ ] Code added to index-enhanced.html
- [ ] Code added to thank-you.html
- [ ] Realtime report shows active user
- [ ] Page views are tracking
- [ ] No errors in browser console

## 📞 **Support**

If you encounter issues:
1. Check the **Realtime report** first
2. Verify the Measurement ID is correct
3. Clear browser cache and test again
4. Check browser console for errors (F12 → Console)

---

**Your GA4 implementation will give you powerful insights into customer behavior and help optimize your florist business for growth!** 🌸📊

