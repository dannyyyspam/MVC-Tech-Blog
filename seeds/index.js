const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-------DATABASE SYNCED-------');
  await seedUsers();
  console.log('-------SEEDED-------');

  await seedPosts();
  console.log('-------SEEDED-------');

  await seedComments();
  console.log('-------SEEDED-------');

  process.exit(0);
};

seedAll();