import { Client, Account, Databases } from 'appwrite';

export const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65b0d834cb7651c81914'); // Replace with your project ID

export const account = new Account(client);
export const db = new Databases(client);
export { ID } from 'appwrite';

const email = 'pritishtyagi04@gmail.com';
const password = 'rebeLions';
    account.createEmailSession(email, password).then(response => {
        // Authentication successful, use response to get the user's authentication token
        const authToken = response['$id'];
        console.log('Authentication token:', authToken);
    })
    .catch(error => {
        // Handle authentication error
        console.error('Error authenticating user:', error);
    });

