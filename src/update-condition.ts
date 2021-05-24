import { createDocClient } from './createDynamodbDocClient';

const docClient = createDocClient();
const table = 'Movies';

const year = 2015;
const title = 'The Big New Movie';

// Conditional update (will fail)

const params = {
  TableName: table,
  Key: {
    year: year,
    title: title,
  },
  // Update expression to execute
  UpdateExpression: 'remove info.actors[0]',
  // setting :num var
  ExpressionAttributeValues: {
    ':num': 3,
  },
  //Condition
  ConditionExpression: 'size(info.actors) > :num',
  ReturnValues: 'UPDATED_NEW',
};

console.log('Attempting a conditional update...');
docClient.update(params, function (err, data) {
  if (err) {
    console.error(
      'Unable to update item. Error JSON:',
      JSON.stringify(err, null, 2),
    );
  } else {
    console.log('UpdateItem succeeded:', JSON.stringify(data, null, 2));
  }
});
