# Sending Verification Code SMS with Twilio

This is a simple Node.js script that uses the Twilio API to generate a random code and send it via SMS.

## Prerequisites

Before running the script, make sure you have the following:

- Node.js installed on your machine
- Twilio account credentials (account SID and auth token)

## Installation

1. Clone this repository

2. Install the required dependencies by running the following command in your terminal:

   ```bash
   npm install

## Usage

1. Open the .env file and add the following environment variables, replacing the placeholders with your actual Twilio account credentials and phone numbers:

    ```bash
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    SENDER_PHONE_NUMBER=your_sender_phone_number
    RECIPIENT_PHONE_NUMBER=your_recipient_phone_number
    
2. In the package.json file, make sure to add the "type": "module" property:
    ```json
    "type": "module"
    ````

3. Run the script using the following command in your terminal:

    ```bash
    node app.js
    ```

    




