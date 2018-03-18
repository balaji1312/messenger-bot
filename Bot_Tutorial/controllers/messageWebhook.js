const processMessage = require('/home/balaji1312/Desktop/Bot_Tutorial/helpers/processMessage');
module.exports = (req, res) => {
 if (req.body.object === 'page') {
 req.body.entry.forEach(entry => {
 entry.messaging.forEach(event => {
 if (event.message && event.message.text) {
 processMessage(event);
 }
 });
 });
res.status(200).end();
 }
};