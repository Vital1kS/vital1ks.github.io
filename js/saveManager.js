function saveData(){
    for(let i = 1;i<=6;i++){
        localStorage.setItem("level"+i+"Value",getValue(i));
        localStorage.setItem("level"+i+"Count",getCount(i));
        localStorage.setItem("level"+i+"Cost",getCost(i));
    }
    localStorage.setItem("interval",interval);
    localStorage.setItem("timeIntervalCount",timeIntervalCount);
    localStorage.setItem("timeIntervalCost",timeIntervalCost);
    localStorage.setItem("absoluteIncome",absoluteIncome);
    localStorage.setItem("relativeIncome",relativeIncome);
    localStorage.setItem("mainValue",mainValue);
}
function loadData(){
    if(localStorage.getItem("mainValue")==null)
    return;
    for(let i = 1;i<=6;i++){
        setValue(i,new Decimal(localStorage.getItem("level"+i+"Value")));
        setCount(i,new Decimal(localStorage.getItem("level"+i+"Count")));
        setCost(i,new Decimal(localStorage.getItem("level"+i+"Cost")));
    }
    interval = new Decimal(localStorage.getItem("interval"));
    timeIntervalCount = new Decimal(localStorage.getItem("timeIntervalCount"));
    timeIntervalCost = new Decimal(localStorage.getItem("timeIntervalCost"));
    absoluteIncome = new Decimal(localStorage.getItem("absoluteIncome"));
    relativeIncome = new Decimal(localStorage.getItem("relativeIncome"));
    mainValue = new Decimal(localStorage.getItem("mainValue"));
    refreshText();
}