
# Sample app to demonstrate Browser Push Notifications 

## Test this app.

Goto [https://cloudboost.github.io/SampleApps/javascript/pushnotifications/basic](https://cloudboost.github.io/SampleApps/javascript/pushnotifications/basic) to test push nnotifications in your browser.   

## Steps to run this project locally.

#### Get the API Keys
Go to [CloudBoost Dashboard](https://dashboard.cloudboost.io), create a new  app, and get your app keys.

####Save API Keys in index.html
Add API Keys which you obtained from step 1 in CB.CloudApp.init() function in index.html

####Add Security exception
You will need to add a security exception to your web browser when you running locally(Since Push require https to work for security purposes)

####For Chrome Support
To receive Push Notifications in Chrome, add **gcm_sender_id** in manifest.json.
For more information check [CloudBoost Push Notifications Tutorials](https://tutorials.cloudboost.io/en/pushnotifications/javascript)

####Run this project locally. 

This is a NodeJS Project. However, You don't need NodeJS to work on PushNotifications. We use NodeJS to run this project in `localhost` You need to install NodeJS. Run `npm install` and then run `node server.js` to run this project on your local dev machine. 

**Note:** You will not be able to test notifications for Chrome on localhost. You need HTTPS to be enabled for your app. 

**Important**
* Make sure serviceWorker.js file is present in root directory of your app. 


#Contribute
If you want to contribute to this repo. Please make sure you spell check everything and make sure you have tested the code with the live CloudBoost API before sending us the pull request.
