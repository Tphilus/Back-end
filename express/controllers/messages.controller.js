const path = require('path'); // /folder/files.jpg \folder\files.jpg

const getMessage = (req, res) => {
    // res.send('<ul><li>Hello Albert!</li></ul>')
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'img.png'));
};

const postMessage = (req, res) => {
    console.log('Updationg messages...');
}

module.exports = {
    getMessage, postMessage
}

