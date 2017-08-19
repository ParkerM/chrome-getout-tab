var getOut = [new Audio("audio/getout.mp3"), new Audio("audio/getout2.mp3")];

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    getRandomSound().play();
});

chrome.windows.onRemoved.addListener(function(windowid) {
    getRandomSound().play();
});

function getRandomSound() {
    return getOut[Math.floor(Math.random() * getOut.length)];
}
