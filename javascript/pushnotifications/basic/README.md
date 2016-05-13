
# Browser Push Notifications

[![Join the chat at https://gitter.im/cloudboost/help](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cloudboost/help?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Build Status](http://cbjenkins.cloudapp.net:8080/buildStatus/icon?job=CbTutorial)](http://cbjenkins.cloudapp.net:8080/job/CbTutorial/)

Tutorials for CloudBoost is hosted at [https://tutorials.cloudboost.io](https://tutorials.cloudboost.io)

# How to run this

## Get the credentials
Go to [CloudBoost Dashboard](https://dashboard.cloudboost.io) and create your app, and get the credentials.

## Add credentials index.html
Add credentials which you obtained from above step (appId and AppKey) in CB.CloudApp.init() function in index.html.

## For Chorme Support
To receive Push Notifications in Chrome, add **gcm_sender_i** in manifest.json.
for more infor check [CloudBoost Push Notifications Tutorials](https://tutorials.cloudboost.io/en/pushnotifications/javascript)

**Important**
* Make sure serviceWorker.js and file is present in root
* 
#Contribute
If you want to contribute to this repo. Please make sure you spell check everything and make sure you have tested the code with the live CloudBoost API before sending us the pull request.
