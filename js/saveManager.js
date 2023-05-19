function saveData(){
    for(let prestige = 1; prestige<=prestigeMaxCount;prestige++){
        for(let level = 1;level<=6;level++){
            localStorage.setItem("level"+level+"ValueP"+prestige,getValue(level,prestige));
            localStorage.setItem("level"+level+"CountP"+prestige,getCount(level,prestige));
            localStorage.setItem("level"+level+"CostP"+prestige,getCost(level,prestige));
        }
    }
    localStorage.setItem("interval",interval);
    localStorage.setItem("timeIntervalCount",timeIntervalCount);
    localStorage.setItem("timeIntervalCost",timeIntervalCost);
    localStorage.setItem("absoluteIncome",absoluteIncome);
    localStorage.setItem("relativeIncome",relativeIncome);
    localStorage.setItem("mainValue",mainValue);
    localStorage.setItem("multiplierValue",multiplierValue);
    localStorage.setItem("multiplierCount",multiplierCount);
    localStorage.setItem("multiplierCost",multiplierCost);
    localStorage.setItem("prestigeLayerCount",prestigeLayerCount);
    localStorage.setItem("prestigeLayerCost",prestigeLayerCost);
    localStorage.setItem("selectedLayer",selectedLayer);
}
function loadData(){
    for(let prestige = 1; prestige<=prestigeMaxCount;prestige++){
        for(let level = 1;level<=6;level++){
            if(localStorage.getItem("level"+level+"ValueP"+prestige) == null){
                localStorage.setItem("level"+level+"ValueP"+prestige,new Decimal(0));
            }else{
                setValue(level,new Decimal(localStorage.getItem("level"+level+"ValueP"+prestige)),prestige);
            }
            if(localStorage.getItem("level"+level+"CountP"+prestige) == null){
                localStorage.setItem("level"+level+"CountP"+prestige,new Decimal(0));
            }else{
                setCount(level,new Decimal(localStorage.getItem("level"+level+"CountP"+prestige)),prestige);
            }
            if(localStorage.getItem("level"+level+"CostP"+prestige) == null){
                localStorage.setItem("level"+level+"CostP"+prestige,new Decimal(0));
            }else{
                setCost(level,new Decimal(localStorage.getItem("level"+level+"CostP"+prestige)),prestige);
            }
        }
    }
    if(localStorage.getItem("interval") == null){
        localStorage.setItem("interval",new Decimal(1000));
    }else{
        interval = new Decimal(localStorage.getItem("interval"));
    }
    if(localStorage.getItem("timeIntervalCount") == null){
        localStorage.setItem("timeIntervalCount",new Decimal(0));
    }else{
        timeIntervalCount = new Decimal(localStorage.getItem("timeIntervalCount"));
    }
    if(localStorage.getItem("timeIntervalCost") == null){
        localStorage.setItem("timeIntervalCost",new Decimal(1000));
    }else{
        timeIntervalCost = new Decimal(localStorage.getItem("timeIntervalCost"));
    }
    if(localStorage.getItem("absoluteIncome") == null){
        localStorage.setItem("absoluteIncome",new Decimal(0));
    }else{
        absoluteIncome = new Decimal(localStorage.getItem("absoluteIncome"));
    }
    if(localStorage.getItem("relativeIncome") == null){
        localStorage.setItem("relativeIncome",new Decimal(0));
    }else{
        relativeIncome = new Decimal(localStorage.getItem("relativeIncome"));
    }
    if(localStorage.getItem("mainValue") == null){
        localStorage.setItem("mainValue",new Decimal(10));
        console.log("11111");
    }else{
        mainValue = new Decimal(localStorage.getItem("mainValue"));
    }
    if(localStorage.getItem("multiplierValue") == null){
        localStorage.setItem("multiplierValue",new Decimal(1000));
    }else{
        multiplierValue = new Decimal(localStorage.getItem("multiplierValue"));
    }
    if(localStorage.getItem("multiplierCount") == null){
        localStorage.setItem("multiplierCount",new Decimal(1000));
    }else{
        multiplierCount = new Decimal(localStorage.getItem("multiplierCount"));
    }
    if(localStorage.getItem("multiplierCost") == null){
        localStorage.setItem("multiplierCost",new Decimal(1000));
    }else{
        multiplierCost = new Decimal(localStorage.getItem("multiplierCost"));
    }
    if(localStorage.getItem("prestigeLayerCount") == null){
        localStorage.setItem("prestigeLayerCount",new Decimal(1000));
    }else{
        prestigeLayerCount = new Number(localStorage.getItem("prestigeLayerCount"));
    }
    if(localStorage.getItem("prestigeLayerCost") == null){
        localStorage.setItem("prestigeLayerCost",new Decimal(1000));
    }else{
        prestigeLayerCost = new Decimal(localStorage.getItem("prestigeLayerCost"));
    }
    if(localStorage.getItem("selectedLayer") == null){
        localStorage.setItem("selectedLayer",new Number(1000));
    }else{
        selectedLayer = localStorage.getItem("selectedLayer");
    }
    loadPrestige();
    refreshText();
}
function loadPrestige(){
    let selectLayer2Button = document.getElementById("selectLayer2Button");
    prestigeLayerCount > 1 ? selectLayer2Button.hidden=false :selectLayer2Button.hidden=true;
    paintPrestigeButton();
}