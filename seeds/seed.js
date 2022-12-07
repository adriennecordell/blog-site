const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userdata = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const project of projectData) {
        await project.create({
            ...project,
            iser_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};
seedDatabase();