const sdk = require('node-appwrite');

const client = new sdk.Client();

client
    .setEndpoint('https://localhost/v1') // Your API Endpoint
    .setProject('624d7fd5ddadc8fecda0') // Your project ID
    .setKey('98d14be59ff17cb23cdd704eb19c4c967b0b369cb96b76ca6ff6deba5840e06559903a8015b317d14163f3338b832ac01f49c71aaea694d44bc057a47fec3b75612295a7871ace5da5ff44a9e5b6c02dc2cf6f095140f9245b961840a4d50d1eb7a5feaf8cc851c91b7dbb35027e2c9f6753a1437ea60dc219948009f40e9a3b') // Your secret API key
;