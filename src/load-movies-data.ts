import AWS = require('aws-sdk');
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
import { readFileSync } from 'fs';
const serviceConfigOptions: ServiceConfigurationOptions = {
  region: 'ap-east-1',
  ///endpoint: 'http://localhost:8000',
};
const docClient = new AWS.DynamoDB.DocumentClient(serviceConfigOptions);
console.log('Importing movies into DynamoDB. Please wait.');

const allMovies = JSON.parse(readFileSync('moviedata.json', 'utf8'));
allMovies.forEach(function (movie) {
  const params = {
    TableName: 'Movies',
    Item: {
      year: movie.year,
      title: movie.title,
      info: movie.info,
    },
  };

  docClient.put(params, function (err, data) {
    if (err) {
      console.error(
        'Unable to add movie',
        movie.title,
        '. Error JSON:',
        JSON.stringify(err, null, 2),
      );
    } else {
      console.log('PutItem succeeded:', movie.title);
    }
  });
});
