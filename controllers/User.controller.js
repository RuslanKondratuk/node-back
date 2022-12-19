const User = require('../models/User')

module.exports.createUser = async (req, res, next) => {
    const {body} = req;
    const createdUser = await new User(body);
    const result = await createdUser.save();
    res.status(201).send(result)
}

module.exports.getAllUsers = async (req, res, next) => {
    const users = await User.findAll();
    res.send(users)
}

module.exports.getOneUser = async (req, res, next) => {
    const {params: {userId}} = req;
    const foundedUser = await User.findOne(Number (userId));
    res.send(foundedUser);
}

module.exports.updateUser = async (req, res, next) => {
    const {body} = req;
    const {params: {userId}} = req;
    const truUser = await User.findOne(Number (userId))
    const updateUser = await truUser.update(body);
    // res.send(updateUser)
}

module.exports.deleteUser = async (req, res, next) => {
    const {params: {userId}} = req;
    const truUser = await User.findOne(Number (userId))
    const deleteUser = await truUser.delete()
    res.send(deleteUser)
}