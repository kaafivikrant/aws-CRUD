var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIAZGJVKBIKLE6HJKFF", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {

    var params = {
        TableName: "Testing",
        Key: { 
            "users": "Nitin" 
        },
        UpdateExpression: "set work = :w",
        ExpressionAttributeValues: {
            ":w":"frontend"
        },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("Testing::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("Testing::update::success "+JSON.stringify(data) );
        }
    });
}

modify();