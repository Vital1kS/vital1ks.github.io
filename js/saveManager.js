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
}
function loadData(){
    if(localStorage.getItem("mainValue")==null) return;
    for(let prestige = 1; prestige<=prestigeMaxCount;prestige++){
        for(let level = 1;level<=6;level++){
            setValue(level,new Decimal(localStorage.getItem("level"+level+"ValueP"+prestige)),prestige);
            setCount(level,new Decimal(localStorage.getItem("level"+level+"CountP"+prestige)),prestige);
            setCost(level,new Decimal(localStorage.getItem("level"+level+"CostP"+prestige)),prestige);
        }
    }
    interval = new Decimal(localStorage.getItem("interval"));
    timeIntervalCount = new Decimal(localStorage.getItem("timeIntervalCount"));
    timeIntervalCost = new Decimal(localStorage.getItem("timeIntervalCost"));
    absoluteIncome = new Decimal(localStorage.getItem("absoluteIncome"));
    relativeIncome = new Decimal(localStorage.getItem("relativeIncome"));
    mainValue = new Decimal(localStorage.getItem("mainValue"));
    multiplierValue = new Decimal(localStorage.getItem("multiplierValue"));
    multiplierCount = new Decimal(localStorage.getItem("multiplierCount"));
    multiplierCost = new Decimal(localStorage.getItem("multiplierCost"));
    prestigeLayerCount = new Number(localStorage.getItem("prestigeLayerCount"));
    prestigeLayerCost = new Decimal(localStorage.getItem("prestigeLayerCost"));
    loadPrestige();
    refreshText();
}
function loadPrestige(){
    let prestigeLayer2 = document.getElementById("prestigeLayer2");
    prestigeLayerCount > 1 ? prestigeLayer2.hidden=false :prestigeLayer2.hidden=true;
    paintPrestigeButton();
}