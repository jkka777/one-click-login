# one-click-login

A simple app with authentication provided by oauth 2.0

# One-Click Login using Gmail and Facebook

This project demonstrates how to implement one-click login functionality using Gmail and Facebook authentication. Users can sign up to your website with their Gmail or Facebook credentials by clicking on a single button.

## Features

- One-click login using Gmail and Facebook authentication
- Storing user information (name, email) in local storage after successful authentication using access tokens

## Setup

- Clone this repository to your local machine:
- Configure the Gmail API and Facebook App:
- Create a project in the Google cloud Console and set up the project and generate client id and client secret along with redirect URI.
- Create a Facebook App for developers and configure it for web authentication.

## Configuration

- Replace YOUR_CLIENT_ID and YOUR_REDIRECT_URI with your actual Gmail API credentials in index.js
- Replace YOUR_FACEBOOK_APP_ID with your actual Facebook App ID in index.js

## Usage

- Open index.html in a web browser to see the login buttons for Gmail and Facebook.
- Click the buttons to initiate the authentication process.
- After successful authentication, the user's information will be stored in local storage.

## Dependencies

- Google API JavaScript Client: Used for Gmail authentication.
- Facebook JavaScript SDK: Used for Facebook authentication.

## Credits

This project was inspired by the need for a seamless one-click login experience using popular social media platforms.
