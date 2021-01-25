# QRCode Badge Generator
QRCode Badge Generator is an idea from [App Ideas](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/QRCode-Badge-App.md).

## User Stories

-   [x] User can see an input panel containing input fields for the attendee
name, email address, Twitter account name, GitHub account name, and 'Cancel'
and 'Create' buttons.
-   [x] User can enter data into these input fields. Note that attendee name
and email address are required, but the Twitter and GitHub account names are
optional fields.
-   [x] User can click the 'Cancel' button to clear all input fields as well as
the badge panel (see below) if it has been created.
-   [x] User can click the 'Create' button to generated an image of the 
attendees name badge.
-   [x] User can see an error message if any of the following are true:
    - Required fields are empty
    - A first name and last name have not been entered
    - Email input field isn't a properly formatted email address
    - Twitter account name doesn't start with '@'
-   [x] User can see an badge panel displayed on screen containing this 
information, plus a QR code encoded with this information.

## Bonus features

-   [ ] User can see a 'Print' button below the badge panel.
-   [ ] User can see the 'Print' button enabled only after the input fields
have been validated and the badge is displayed in the badge panel.
-   [ ] User can make corrections to the input fields and click 'Create' to
update the contents of the badge panel.
-   [ ] User can click the 'Print' button to reproduce the badge panel on a
label or hardcopy.
-   [ ] User can see the '@' symbol automatically prepended to the Twitter
account name so it doesn't have to be manually entered.

## Available Scripts 

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3030](http://localhost:3030) to view it in the browser.
