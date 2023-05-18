function refreshTicker(){
    stopTicker();
    startTicker();
}
function startTicker(){
    ticker = setInterval(makeAddition,interval);
}
function stopTicker(){
    clearInterval(ticker);
}