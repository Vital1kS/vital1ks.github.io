function reset(){
    if(confirm("Are you sure you want to delete ALL data?")){
        stopTicker()
        localStorage.clear();
        initAllData();
        loadPrestige();
        refreshText();
        startTicker();
        selectLayer(1);
    }
}