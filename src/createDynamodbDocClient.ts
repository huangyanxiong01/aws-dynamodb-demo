import AWS = require('aws-sdk');
import { ServiceConfigurationOptions } from 'aws-sdk/lib/service';
const serviceConfigOptions: ServiceConfigurationOptions = {
  region: 'ap-east-1',
  ///endpoint: 'http://localhost:8000',
};
const docClient = new AWS.DynamoDB.DocumentClient(serviceConfigOptions);
export function createDocClient() {
  return docClient;
}
