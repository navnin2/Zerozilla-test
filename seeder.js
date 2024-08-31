require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/user');
const connectDB = require('./config/db');

const seedUsers = async () => {
  await connectDB();

  const users = [
    {
      username: 'admin',
      password: 'admin123',
    },
    {
      username: 'user1',
      password: 'password123',
    },
    {
      username: 'user2',
      password: 'password456',
    },
  ];

  await User.deleteMany();

  for (let user of users) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await User.create(user);
  }

  console.log('Users seeded successfully');
  process.exit();
};

seedUsers();