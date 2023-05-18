function reset(){
    if(confirm("Are you shure you want to delete ALL data?")){
        stopTicker()
        localStorage.clear();
        initData();
        refreshText();
        startTicker();
    }
}