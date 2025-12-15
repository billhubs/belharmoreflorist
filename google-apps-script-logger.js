// Google Apps Script - Bélharmore Florist Logger API
// Copy this code to Google Apps Script and deploy as Web App

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get the spreadsheet
    const spreadsheetId = '1WGPbt96vypeqSTCiocn6HQFT3POEqXCwRjxQAOsFJ74'; // Your sheet ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Add timestamp
    const timestamp = new Date();
    
    // Prepare row data
    const rowData = [
      timestamp,                                    // A: Timestamp
      data.customerName || '',                      // B: Customer Name
      data.customerEmail || '',                     // C: Email
      data.customerPhone || '',                     // D: Phone
      data.serviceType || '',                       // E: Service Type
      data.deliveryDate || '',                      // F: Delivery Date
      data.budgetRange || '',                       // G: Budget Range
      data.specialRequests || '',                   // H: Special Requests
      'New',                                        // I: Status
      '',                                           // J: Response Date
      '',                                           // K: Response Notes
      e.postData.contents                           // L: Raw Data (for debugging)
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Format the timestamp
    sheet.getRange(sheet.getLastRow(), 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 12);
    
    // Set status cell to green background for new inquiries
    const statusCell = sheet.getRange(sheet.getLastRow(), 9);
    statusCell.setBackground('#4CAF50');
    statusCell.setFontColor('white');
    statusCell.setFontWeight('bold');
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Inquiry logged successfully',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setStatusCode(200);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setStatusCode(500);
  }
}

function doGet(e) {
  // Simple health check endpoint
  return ContentService
    .createTextOutput(JSON.stringify({
      status: 'Bélharmore Florist Logger API is running',
      timestamp: new Date().toISOString(),
      version: '1.0'
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setStatusCode(200);
}

// Optional: Function to set up the sheet headers
function setupSheetHeaders() {
  const spreadsheetId = '1WGPbt96vypeqSTCiocn6HQFT3POEqXCwRjxQAOsFJ74';
  const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
  
  // Set headers
  const headers = [
    'Timestamp',
    'Customer Name', 
    'Email',
    'Phone',
    'Service Type',
    'Delivery Date',
    'Budget Range',
    'Special Requests',
    'Status',
    'Response Date',
    'Response Notes',
    'Raw Data'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Format headers
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground('#5A543D');
  headerRange.setFontColor('white');
  headerRange.setFontWeight('bold');
  headerRange.setHorizontalAlignment('center');
  
  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);
  
  console.log('Sheet headers set up successfully');
}
