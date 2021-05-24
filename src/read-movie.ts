import { createDocClient } from './createDynamodbDocClient';

const docClient = createDocClient();
const table = 'Movies';

const year = 2015;
const title = 'The Big New Movie';

const params = {
  TableName: table,
  Key: {
    year: year,
    title: title,
  },
};

docClient.get(params, function (err, data) {
  if (err) {
    console.error(
      'Unable to read item. Error JSON:',
      JSON.stringify(err, null, 2),
    );
  } else {
    console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
  }
});
