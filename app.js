import twilio from 'twilio';
import dotenv from 'dotenv'
dotenv.config()

// Fetching environment variables, 
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, SENDER_PHONE_NUMBER, RECIPIENT_PHONE_NUMBER } = process.env

//Twilio environment variables
const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Random Code Generator Function
function generateRandomCode() {
    const length = 6;
    let code = '';

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * 10);
        code += randomNumber.toString();
    }

    return code;
}

// Generate Code
const code = generateRandomCode();

//Send message to Twilio
client.messages
    .create({
        body: code,
        from: SENDER_PHONE_NUMBER,
        to: RECIPIENT_PHONE_NUMBER
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));