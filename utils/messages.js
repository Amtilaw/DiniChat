const moment = require("moment");
const fs = require("fs");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}

function saveToLog(message, user) {
  message = formatMessage(user.username, message.text);
  let LogLine = `Room : ${user.room}, ${message.username}: ${message.text} AT ${message.time}\n`;
  fs.appendFile(`log/logRoom${user.room}.txt`, LogLine, (err) => {
    if (err) {
      console.log(err);
      return false;
    }
  });
  return true;
}

module.exports = { formatMessage, saveToLog };
