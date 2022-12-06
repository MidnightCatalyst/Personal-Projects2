const { connect } = require('./mongo');
const bcrypt = require('bcrypt');

const DATABASE = 'Account_Database';
const COLLECTION = 'User_Information';


const collection = async() => {
    const client = await connect();
    return client.db(DATABASE).collection(COLLECTION);
}

const createUser = async (user) => {
    const db = await collection();
    const salt = bcrypt.genSaltSync(10)
    const hash = await bcrypt.hash(user.password, salt)
    user.password = hash
    await db.insertOne({
      username: user.username,
      password: user.password,
      workouts: [],
      following: [],
    });
    return getUser(user.username);
  };

const getUser = async (username) => {
    const db = await collection();
    const user = await db.findOne({username: username});
    return user;
}

const getUsers = async () => {
    const db = await collection();
    const users = await db.find({}).toArray();
    return users;
}

const deleteUser = async (username) => {
    const db = await collection();
    const user = await db.deleteOne({username: username});
}

const login = async (username, password) => {
    const db = await collection();
    const user = await db.findOne({username: username});
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {
            return user;
        }
    }
}

const getFollowers = async (username) => {
    const db = await collection();
    const user = await db.findOne({username: username});
    return user.followers;
}

const unfollow = async (username, follower) => {
    const db = await collection();
    const user = await db.findOne({username: username});
    const index = user.followers.indexOf(follower);
    if (index > -1) {
        user.followers.splice(index, 1);
    }
    await db
        .updateOne(
            {username: username},
            {$set: {followers: user.followers}}
        );
}
const seed = async () => {
    const db = await collection();
    await db.deleteMany({});
    await db.insertMany([
        {
            username: 'Midnight',
            password: 'Midnight',
            followers: ['Midnight1', 'Midnight2'],
            workouts: []
        },
        {
            username: 'Midnight1',
            password: 'Midnight1',
            followers: ['Midnight1'],
            workouts: []
        },
        {
            username: 'Midnight2',
            password: 'Midnight2',
            followers: ['Midnight1'],
            workouts: []
        }
    ]);
} 

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    login,
    getFollowers,
    unfollow,
    seed
}