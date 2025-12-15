# 📊 Google Sheets Integration Setup Guide

## 🎯 **What We're Building**

A complete dual system that:
1. **Sends email notifications** (FormSubmit.co) - so you get instant alerts
2. **Logs all inquiries** to Google Sheets - for business tracking and analytics

**Result:** Professional inquiry management with both immediate notifications AND data tracking!

---

## 🚀 **Step-by-Step Setup**

### **Step 1: Set Up Google Apps Script Logger (15 minutes)**

1. **Open Google Apps Script:**
   - Go to [script.google.com](https://script.google.com)
   - Sign in with your Google account

2. **Create New Project:**
   - Click "New Project"
   - Rename it to "Bélharmore Florist Logger"

3. **Add the Code:**
   - Delete the default code in `Code.gs`
   - Copy and paste the code from `google-apps-script-logger.js`
   - **Important:** Replace the Spreadsheet ID in the code:
     ```javascript
     const spreadsheetId = 'YOUR_ACTUAL_SPREADSHEET_ID_HERE';
     ```

4. **Get Your Spreadsheet ID:**
   - Open your Google Sheet: [Bélharmore Florist Inquiries Log](https://docs.google.com/spreadsheets/d/1WGPbt96vypeqSTCiocn6HQFT3POEqXCwRjxQAOsFJ74/edit)
   - Copy the ID from the URL: `1WGPbt96vypeqSTCiocn6HQFT3POEqXCwRjxQAOsFJ74`
   - Update the code with this ID

5. **Save and Deploy:**
   - Click "Save" (Ctrl+S)
   - Click "Deploy" → "New deployment"
   - Choose "Web app" as type
   - Set "Execute as": "Me"
   - Set "Who has access": "Anyone"
   - Click "Deploy"
   - **Copy the Web App URL** - you'll need this!

### **Step 2: Update Your Website Form (5 minutes)**

1. **Update the HTML form** to send data to both:
   - FormSubmit (for email notifications)
   - Google Apps Script (for logging)

2. **Replace your current form** with this enhanced version:

```html
<!-- Enhanced Booking Form with Dual Integration -->
<form id="bookingForm" onsubmit="handleFormSubmit(event)">
  
  <!-- Your existing form fields -->
  <div class="form-grid">
    <div class="form-group">
      <label for="customerName">Your Name *</label>
      <input type="text" id="customerName" name="customerName" required>
    </div>
    
    <div class="form-group">
      <label for="customerEmail">Email Address *</label>
      <input type="email" id="customerEmail" name="customerEmail" required>
    </div>
    
    <div class="form-group">
      <label for="customerPhone">Phone Number</label>
      <input type="tel" id="customerPhone" name="customerPhone">
    </div>
    
    <div class="form-group">
      <label for="serviceType">Service Type *</label>
      <select id="serviceType" name="serviceType" required>
        <option value="">Select a service</option>
        <option value="Custom Bouquet">Custom Bouquet</option>
        <option value="Wedding Florals">Wedding Florals</option>
        <option value="Event Arrangements">Event Arrangements</option>
        <option value="Corporate Flowers">Corporate Flowers</option>
        <option value="Sympathy Flowers">Sympathy Flowers</option>
      </select>
    </div>
    
    <div class="form-group">
      <label for="deliveryDate">Preferred Delivery Date *</label>
      <input type="date" id="deliveryDate" name="deliveryDate" required>
    </div>
    
    <div class="form-group">
      <label for="budgetRange">Budget Range *</label>
      <select id="budgetRange" name="budgetRange" required>
        <option value="">Select budget range</option>
        <option value="$50-$100">$50 - $100</option>
        <option value="$100-$200">$100 - $200</option>
        <option value="$200-$350">$200 - $350</option>
        <option value="$350-$500">$350 - $500</option>
        <option value="$500+">$500+</option>
      </select>
    </div>
    
    <div class="form-group full-width">
      <label for="specialRequests">Special Requests & Details</label>
      <textarea id="specialRequests" name="specialRequests" placeholder="Please describe your vision, color preferences, flower types you love or want to avoid, delivery instructions, etc."></textarea>
    </div>
  </div>
  
  <!-- Hidden fields for FormSubmit -->
  <input type="hidden" name="_subject" value="🌸 New Booking Inquiry - Bélharmore Florist!">
  <input type="hidden" name="_template" value="table">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_next" value="https://belharmoreflorist.netlify.app/thank-you.html">
  <input type="text" name="_honey" style="display:none">
  
  <!-- Google Sheets Logging (hidden) -->
  <input type="hidden" id="googleSheetsUrl" name="googleSheetsUrl" value="YOUR_GOOGLE_APPS_SCRIPT_URL_HERE">
  
  <button type="submit" class="submit-btn">
    <span class="btn-text">Send My Order Inquiry</span>
    <span class="loading">⏳</span>
  </button>
  
  <div class="success-message" id="successMessage">
    Thank you for your inquiry! We'll contact you within 24 hours to discuss your custom order.
  </div>
</form>
```

### **Step 3: Add JavaScript Handler (10 minutes)**

Add this JavaScript function to your website (in the `<script>` section):

```javascript
// Enhanced form submission with dual integration
async function handleFormSubmit(event) {
  event.preventDefault();
  
  const submitBtn = document.querySelector('.submit-btn');
  const btnText = document.querySelector('.btn-text');
  const loading = document.querySelector('.loading');
  const successMessage = document.getElementById('successMessage');
  const form = document.getElementById('bookingForm');
  
  // Show loading state
  submitBtn.disabled = true;
  btnText.style.display = 'none';
  loading.classList.add('show');
  
  // Collect form data
  const formData = {
    customerName: document.getElementById('customerName').value,
    customerEmail: document.getElementById('customerEmail').value,
    customerPhone: document.getElementById('customerPhone').value,
    serviceType: document.getElementById('serviceType').value,
    deliveryDate: document.getElementById('deliveryDate').value,
    budgetRange: document.getElementById('budgetRange').value,
    specialRequests: document.getElementById('specialRequests').value,
    timestamp: new Date().toISOString(),
    source: 'Belharmore Florist Website'
  };
  
  try {
    // 1. Send to Google Sheets (for logging)
    const googleSheetsUrl = document.getElementById('googleSheetsUrl').value;
    if (googleSheetsUrl && googleSheetsUrl !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      await fetch(googleSheetsUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
    }
    
    // 2. Send to FormSubmit (for email notification)
    const formDataForEmail = new FormData(form);
    await fetch('https://formsubmit.co/belharmore@gmail.com', {
      method: 'POST',
      body: formDataForEmail
    });
    
    // Success - show message and reset form
    successMessage.classList.add('show');
    form.reset();
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth' });
    
    // Redirect to thank you page after 3 seconds
    setTimeout(() => {
      window.location.href = 'thank-you.html';
    }, 3000);
    
  } catch (error) {
    console.error('Error:', error);
    alert('There was an error submitting your inquiry. Please try again or contact us directly.');
  } finally {
    // Reset button state
    submitBtn.disabled = false;
    btnText.style.display = 'inline';
    loading.classList.remove('show');
  }
}
```

---

## 📊 **What Your Google Sheet Will Track**

| Column | Data Tracked |
|--------|-------------|
| **Timestamp** | Exact time of inquiry |
| **Customer Name** | Full name |
| **Email** | Contact email |
| **Phone** | Phone number (optional) |
| **Service Type** | Type of florist service |
| **Delivery Date** | When they need it |
| **Budget Range** | Their budget category |
| **Special Requests** | Custom requirements |
| **Status** | New/Contacted/Completed |
| **Response Date** | When you responded |
| **Response Notes** | Your follow-up notes |
| **Raw Data** | Full submission for debugging |

---

## ✅ **Testing Your Setup**

### **1. Test Google Apps Script:**
- Open your Web App URL in browser
- Should show: `{"status":"Bélharmore Florist Logger API is running","timestamp":"...","version":"1.0"}`

### **2. Test Website Form:**
- Fill out the form on your website
- Should get email notification
- Should see entry in Google Sheet
- Should redirect to thank-you page

### **3. Verify Data Flow:**
- Check your email (belharmore@gmail.com)
- Check your Google Sheet for new entry
- Confirm all data fields are populated

---

## 🎯 **Business Benefits**

**Email Notifications:** Instant alerts for new inquiries  
**Data Tracking:** Professional business intelligence  
**Response Management:** Track which inquiries you've handled  
**Analytics Ready:** Data for business growth analysis  
**Backup System:** Two systems ensure no inquiries are lost

---

## 🔧 **Advanced Features (Optional)**

**Later you can add:**
- Automatic email responses to customers
- Status tracking and follow-up reminders
- Integration with WhatsApp Business
- Export data for business reports
- Customer communication history

**Your inquiry management system will be more professional than many established businesses!** 🌸
