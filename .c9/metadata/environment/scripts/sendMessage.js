{"filter":false,"title":"sendMessage.js","tooltip":"/scripts/sendMessage.js","undoManager":{"mark":25,"position":25,"stack":[[{"start":{"row":0,"column":0},"end":{"row":16,"column":70},"action":"remove","lines":["// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.","// SPDX-License-Identifier: MIT-0","const AWS = require('aws-sdk')","const sns = new AWS.SNS();","","const sendMessage = async ({ phoneNumber, message }) => {","  const params = {","    Message: message,","    PhoneNumber: phoneNumber","  }","","  return sns.publish(params).promise()","}","","sendMessage({ phoneNumber: process.env.PHONE_NUMBER, message: 'Sending a message from SNS!'})","  .then(() => console.log('Sent message successfully'))","  .catch((error) => console.log('Error sending SNS: ', error.message))"],"id":2},{"start":{"row":0,"column":0},"end":{"row":64,"column":0},"action":"insert","lines":["","DocViewer","Page","of 2","Pages","/**"," * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved."," *"," * This file is licensed under the Apache License, Version 2.0 (the \"License\")."," * You may not use this file except in compliance with the License. A copy of"," * the License is located at"," *"," * http://aws.amazon.com/apache2.0/"," *"," * This file is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR"," * CONDITIONS OF ANY KIND, either express or implied. See the License for the"," * specific language governing permissions and limitations under the License."," *"," */"," ","//snippet-sourcedescription:[ses_sendemail.js demonstrates how to compose an Amazon","SES email and queue it for sending.]","//snippet-keyword:[JavaScript]","//snippet-sourcesyntax:[javascript]","//snippet-keyword:[Code Sample]","//snippet-keyword:[Amazon Simple Email Service]","//snippet-service:[ses]","//snippet-sourcetype:[full-example]","//snippet-sourcedate:[2018-06-02]","//snippet-sourceauthor:[AWS-JSDG]","// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript ","Developer Guide topic at","// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide//ses-examples-","sending-email.html","// snippet-start:[ses.JavaScript.email.sendEmail]","// Load the AWS SDK for Node.js","var aws = require(\"aws-sdk\");","var ses = new aws.SES({ region: \"us-west-2\" });","const sendEmail = async ({ email, message }) => {","  ","    ","var myMessage = message;","var receiverEmail = email;","console.log(JSON.stringify(receiverEmail))","console.log(JSON.stringify(myMessage))","  var params = {","    Destination: {","      ToAddresses: [receiverEmail],","    },","    Message: {","      Body: {","        Text: { Data: myMessage },","      },","      Subject: { Data: \"Game Update!\" },","    },","    Source: \"myemail@example.com\",","  };"," ","  return ses.sendEmail(params).promise()","};","// snippet-end:[ses.JavaScript.email.sendEmail]","module.exports = sendEmail;","//sendEmail({email:'myemail@example.com', message: 'Testing email function'})","Annotations",""]}],[{"start":{"row":0,"column":0},"end":{"row":4,"column":5},"action":"remove","lines":["","DocViewer","Page","of 2","Pages"],"id":3},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":15,"column":83},"end":{"row":16,"column":0},"action":"remove","lines":["",""],"id":4}],[{"start":{"row":15,"column":83},"end":{"row":15,"column":84},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":24,"column":76},"end":{"row":25,"column":0},"action":"remove","lines":["",""],"id":6}],[{"start":{"row":25,"column":83},"end":{"row":26,"column":0},"action":"remove","lines":["",""],"id":7}],[{"start":{"row":55,"column":0},"end":{"row":55,"column":11},"action":"remove","lines":["Annotations"],"id":8},{"start":{"row":54,"column":77},"end":{"row":55,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":29,"column":41},"end":{"row":29,"column":42},"action":"remove","lines":["2"],"id":9}],[{"start":{"row":29,"column":41},"end":{"row":29,"column":42},"action":"insert","lines":["1"],"id":10}],[{"start":{"row":47,"column":13},"end":{"row":47,"column":32},"action":"remove","lines":["myemail@example.com"],"id":11},{"start":{"row":47,"column":13},"end":{"row":47,"column":14},"action":"insert","lines":["e"]},{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"insert","lines":["i"]},{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":["d"]},{"start":{"row":47,"column":16},"end":{"row":47,"column":17},"action":"insert","lines":["e"]},{"start":{"row":47,"column":17},"end":{"row":47,"column":18},"action":"insert","lines":["m"]}],[{"start":{"row":47,"column":13},"end":{"row":47,"column":18},"action":"remove","lines":["eidem"],"id":12}],[{"start":{"row":47,"column":13},"end":{"row":47,"column":14},"action":"insert","lines":["e"],"id":13},{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"insert","lines":["i"]},{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":["d"]},{"start":{"row":47,"column":16},"end":{"row":47,"column":17},"action":"insert","lines":["e"]},{"start":{"row":47,"column":17},"end":{"row":47,"column":18},"action":"insert","lines":["m"]},{"start":{"row":47,"column":18},"end":{"row":47,"column":19},"action":"insert","lines":["b"]}],[{"start":{"row":47,"column":19},"end":{"row":47,"column":20},"action":"insert","lines":["@"],"id":14},{"start":{"row":47,"column":20},"end":{"row":47,"column":21},"action":"insert","lines":["w"]},{"start":{"row":47,"column":21},"end":{"row":47,"column":22},"action":"insert","lines":["w"]},{"start":{"row":47,"column":22},"end":{"row":47,"column":23},"action":"insert","lines":["u"]},{"start":{"row":47,"column":23},"end":{"row":47,"column":24},"action":"insert","lines":["."]},{"start":{"row":47,"column":24},"end":{"row":47,"column":25},"action":"insert","lines":["e"]},{"start":{"row":47,"column":25},"end":{"row":47,"column":26},"action":"insert","lines":["d"]},{"start":{"row":47,"column":26},"end":{"row":47,"column":27},"action":"insert","lines":["u"]}],[{"start":{"row":34,"column":20},"end":{"row":34,"column":32},"action":"insert","lines":["process.env."],"id":21}],[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["E"],"id":22},{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["M"]},{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["A"]},{"start":{"row":34,"column":35},"end":{"row":34,"column":36},"action":"insert","lines":["I"]},{"start":{"row":34,"column":36},"end":{"row":34,"column":37},"action":"insert","lines":["L"]}],[{"start":{"row":34,"column":37},"end":{"row":34,"column":42},"action":"remove","lines":["email"],"id":23}],[{"start":{"row":33,"column":16},"end":{"row":33,"column":28},"action":"insert","lines":["process.env."],"id":24}],[{"start":{"row":33,"column":28},"end":{"row":33,"column":29},"action":"insert","lines":["M"],"id":25},{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["e"]},{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"insert","lines":["s"]},{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"insert","lines":["s"]}],[{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"remove","lines":["s"],"id":26},{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"remove","lines":["s"]},{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"remove","lines":["e"]}],[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["E"],"id":27},{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"insert","lines":["S"]},{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"insert","lines":["S"]},{"start":{"row":33,"column":32},"end":{"row":33,"column":33},"action":"insert","lines":["A"]},{"start":{"row":33,"column":33},"end":{"row":33,"column":34},"action":"insert","lines":["G"]},{"start":{"row":33,"column":34},"end":{"row":33,"column":35},"action":"insert","lines":["E"]}],[{"start":{"row":33,"column":35},"end":{"row":33,"column":42},"action":"remove","lines":["message"],"id":28}],[{"start":{"row":45,"column":35},"end":{"row":45,"column":36},"action":"remove","lines":["!"],"id":29}],[{"start":{"row":54,"column":20},"end":{"row":54,"column":39},"action":"remove","lines":["myemail@example.com"],"id":30},{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"insert","lines":["b"]},{"start":{"row":54,"column":21},"end":{"row":54,"column":22},"action":"insert","lines":["r"]},{"start":{"row":54,"column":22},"end":{"row":54,"column":23},"action":"insert","lines":["a"]},{"start":{"row":54,"column":23},"end":{"row":54,"column":24},"action":"insert","lines":["x"]},{"start":{"row":54,"column":24},"end":{"row":54,"column":25},"action":"insert","lines":["t"]},{"start":{"row":54,"column":25},"end":{"row":54,"column":26},"action":"insert","lines":["o"]},{"start":{"row":54,"column":26},"end":{"row":54,"column":27},"action":"insert","lines":["n"]}],[{"start":{"row":54,"column":27},"end":{"row":54,"column":28},"action":"insert","lines":["e"],"id":31},{"start":{"row":54,"column":28},"end":{"row":54,"column":29},"action":"insert","lines":["i"]},{"start":{"row":54,"column":29},"end":{"row":54,"column":30},"action":"insert","lines":["d"]},{"start":{"row":54,"column":30},"end":{"row":54,"column":31},"action":"insert","lines":["e"]},{"start":{"row":54,"column":31},"end":{"row":54,"column":32},"action":"insert","lines":["m"]},{"start":{"row":54,"column":32},"end":{"row":54,"column":33},"action":"insert","lines":["@"]},{"start":{"row":54,"column":33},"end":{"row":54,"column":34},"action":"insert","lines":["g"]},{"start":{"row":54,"column":34},"end":{"row":54,"column":35},"action":"insert","lines":["m"]},{"start":{"row":54,"column":35},"end":{"row":54,"column":36},"action":"insert","lines":["a"]},{"start":{"row":54,"column":36},"end":{"row":54,"column":37},"action":"insert","lines":["i"]}],[{"start":{"row":54,"column":37},"end":{"row":54,"column":38},"action":"insert","lines":["l"],"id":32},{"start":{"row":54,"column":38},"end":{"row":54,"column":39},"action":"insert","lines":["."]},{"start":{"row":54,"column":39},"end":{"row":54,"column":40},"action":"insert","lines":["c"]},{"start":{"row":54,"column":40},"end":{"row":54,"column":41},"action":"insert","lines":["o"]},{"start":{"row":54,"column":41},"end":{"row":54,"column":42},"action":"insert","lines":["m"]}],[{"start":{"row":54,"column":1},"end":{"row":54,"column":2},"action":"remove","lines":["/"],"id":33},{"start":{"row":54,"column":0},"end":{"row":54,"column":1},"action":"remove","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":55,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1668658466316,"hash":"3e7065141f0f70b3a33e7d5485e84488bd78f2d7"}