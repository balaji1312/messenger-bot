const API_AI_TOKEN = '0ef2968cd9ff40ca9f202a24da0c7a85';
const apiAiClient = require('apiai')(API_AI_TOKEN);
const FACEBOOK_ACCESS_TOKEN = 'EAAWnCfZBOlxwBACozpVKCkowmp0Yeq2GJcytpKKH2ZCDMhslRGQGSQXeXCIWHZBlF305IlxmebF0YjvxyXA9VVsP2Gm0g1iQETRuhBoJIIBTtXgcuNCgzqfsmpnalWxvBjtwniasU7Wi1fZC9O6Ut1NrWdaX2lDIgs1t5yJugQZDZD';
const request = require('request');
const sendTextMessage = (senderId, text) => {
 request({
 url: 'https://graph.facebook.com/v2.6/me/messages',
 qs: { access_token: FACEBOOK_ACCESS_TOKEN },
 method: 'POST',
 json: {
 recipient: { id: senderId },
 message: { text },
 }
 });
};
module.exports = (event) => {
 const senderId = event.sender.id;
 const message = event.message.text;
const apiaiSession = apiAiClient.textRequest(message, {sessionId: 'Kanni_bot'});
apiaiSession.on('response', (response) => {
 const result = response.result.fulfillment.speech;
sendTextMessage(senderId, result);
 });
apiaiSession.on('error', error => console.log(error));
 apiaiSession.end();
};