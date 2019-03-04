export function readText(text, speed) {
  var msg = new SpeechSynthesisUtterance(text);
  msg.rate = speed || 1;
  speechSynthesis.speak(msg);
}

export function isTextReadyToRead(text) {
  if (!text) {
    return false;
  }
  if (text.endsWith(' ') || text.endsWith('.')) {
    return true;
  }
  return false;
}

export function getLastWord(text) {
  if (!text) {
    return text;
  }
  const split = text.toString().trim().split(' ');
  return split[split.length - 1];
}

export function readLastReadIfReady(text, speed) {
  if (isTextReadyToRead(text)) {
    const lastWord = getLastWord(text);
    readText(lastWord, speed);
  }
}
