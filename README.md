Overview
The PayNow web application is a user-friendly platform designed for transferring and requesting money, 
featuring secure transactions and a responsive design. 
This document provides a detailed explanation of the project's structure, functionality, and code.

Project Structure
The project consists of the following files:

index.html: The main HTML file containing the structure and content of the web application.
styles.css: The CSS file for styling the web application.
index.js: The JavaScript file containing functions to handle user interactions and form validations.

The HTML file provides the structure of the web application, including:

Header:

Contains the navigation menu with links to different sections (Home, Transfer Money, Features, Testimonials, Contact Us).
Includes a responsive burger icon for smaller screens and a close icon for menu toggling.
Home Section:

Displays a welcome message and a call-to-action button to join the platform.
Transfer Money Section:

Allows users to send or request money.
Contains two forms for sending and requesting money with respective validation.
Features Section:

Lists key features of the platform with corresponding images and descriptions.
Testimonials Section:

Showcases user testimonials about the service.
Contact Us Section:

Provides a form for users to contact the platform, including fields for name, email, and message.
Footer:

Includes social media links and copyright information.
CSS Styles
The styles.css file is used to style the application. Key elements include:

Header: Styles for the navigation bar and responsive menu.
Sections: Styles for different sections like Home, Transfer Money, Features, Testimonials, and Contact Us.
Buttons: Styling for buttons, including hover effects and active states.
Forms: Styles for input fields, error messages, and layout adjustments.
JavaScript Functions
The index.js file includes several JavaScript functions for handling user interactions and form validations:

toggleButtons(sectionId):

Toggles between the "Send Money" and "Request Money" sections based on the sectionId parameter.
burgerIcon():

Displays the navigation menu and hides the burger icon when clicked.
closeIcon():

Hides the navigation menu and displays the burger icon when clicked.
validateSendMoney():

Validates the "Send Money" form fields (Recipient's Name, Account Number, and Amount) and displays error messages if needed.
validateRequestMoney():

Validates the "Request Money" form fields (Recipient's Name, Requested Amount, and Contact) and displays error messages if needed.
Contact():

Validates the "Contact Us" form fields (Name, Email, and Message) and displays error messages if needed.
