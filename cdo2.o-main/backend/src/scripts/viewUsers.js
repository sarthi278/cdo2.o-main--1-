const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

async function viewUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://yadavanubhav848:$alm15lfJPPtmob4k@cluster1.dqcy3oc.mongodb.net/billing-portal?retryWrites=true&w=majority&appName=Cluster1');
    console.log('Connected to MongoDB');

    const users = await User.find();
    console.log('\nUsers in database:');
    console.log('------------------');
    users.forEach(user => {
      console.log(`Name: ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`Role: ${user.role}`);
      console.log('------------------');
    });

    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
  }
}

viewUsers(); 
