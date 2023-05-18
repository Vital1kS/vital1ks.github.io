function initialize(){
    initData();
    for(let i =1; i<=6;i++){
        let levelButton = document.getElementById("level"+i+"Button");
        levelButton.addEventListener("click",buyUpgrade);
        levelButton.level = i;
        let levelMaxButton = document.getElementById("level"+i+"MaxButton");
        levelMaxButton.addEventListener("click",buyMaxUpgrade);
        levelMaxButton.level = i;
    }
    let timeIntervalButton = document.getElementById("timeIntervalButton");
    timeIntervalButton.addEventListener("click",buyTimeInterval);
    let timeIntervalMaxButton = document.getElementById("timeIntervalMaxButton");
    timeIntervalMaxButton.addEventListener("click",buyMaxTimeInterval);
    loadData();
    startTicker();
}