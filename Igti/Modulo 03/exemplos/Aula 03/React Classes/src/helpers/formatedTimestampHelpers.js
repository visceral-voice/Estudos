function leftPad(value, len = 2, char = "0"){
  let newValue = String(value);
  let result = len - String(value).length;

  if (String(value).length < len){
    for(let c = 0; c < result ; c++){
      newValue = char + newValue;
    }
  }

  return newValue;
}

function getTimeStamp(){
  let now = new Date();
  let timeStamp = "";

  timeStamp += leftPad(now.getDay());
  timeStamp += "/";
  timeStamp += leftPad(now.getMonth() + 1);
  timeStamp += "/";
  timeStamp += leftPad(now.getFullYear());
  timeStamp += " ";
  timeStamp += leftPad(now.getHours());
  timeStamp += ":";
  timeStamp += leftPad(now.getMinutes());
  timeStamp += ":";
  timeStamp += leftPad(now.getSeconds());
  timeStamp += ".";
  timeStamp += leftPad(now.getMilliseconds(), 3);

  return timeStamp;
}

export { getTimeStamp };