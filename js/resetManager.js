function reset(){
    if(confirm("Are you sure you want to delete ALL data?")){
        stopTicker()
        localStorage.clear();
        initAllData();
        loadPrestige();
        refreshText();
        startTicker();
        selectDebugLayerButton.hidden = true;
        selectLayer(1);
    }
}