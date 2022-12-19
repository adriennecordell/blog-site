const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postData) {
        await post.create({
            ...post,
            iser_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};
seedDatabase();