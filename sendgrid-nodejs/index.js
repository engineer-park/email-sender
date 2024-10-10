require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/**
 * Sends an email using SendGrid
 * @param {Object} message - The message object containing email details
 * @param {string} message.from - The sender's email address
 * @param {string} message.to - The recipient's email address
 * @param {string} message.subject - The subject of the email
 * @param {string} message.text - The plain text body of the email
 * @param {string} [message.html] - The HTML body of the email (optional)
 */
async function sendEmail(message) {
    try {
        await sgMail.send(message);
        console.log('Successfully sent email');
    } catch (error) {
        console.error('Error sending email:', error.message);
        if (error.response) {
            console.error('SendGrid response error:', error.response.body);
        }
    }
}

// Example usage
const message = {
    from: 'sender@example.com',  // Must be a verified sender in SendGrid
    to: 'receiver@example.com',
    subject: 'Test email',
    text: 'This is a test email',
};

sendEmail(message);
