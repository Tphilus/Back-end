const model = require('../models/friends.model')

const postFriends =  (req, res) => {
    if(!req.body.name) {
        res.status(400).json({
            error: 'Missing friend name'
        })
    }

    // Adding new friend
    const newFriend = {
        name: req.body.name,
        id: model.length
    }
    model.push(newFriend);
    res.status(200).json(newFriend)
}


const getFriends = (req, res) => {
    res.json(model)
}

const getFriend = (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if(friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            error: 'Friend does not exit'
        });
    }
}

module.exports = {
    getFriend, getFriends, postFriends
}