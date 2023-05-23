function initLayer1Data(){
    level1ValueP1 = new Decimal(0);
    level2ValueP1 = new Decimal(0);
    level3ValueP1 = new Decimal(0);
    level4ValueP1 = new Decimal(0);
    level5ValueP1 = new Decimal(0);
    level6ValueP1 = new Decimal(0);
    interval = new Decimal(1000);

    level1CountP1 = new Decimal(0);
    level2CountP1 = new Decimal(0);
    level3CountP1 = new Decimal(0);
    level4CountP1 = new Decimal(0);
    level5CountP1 = new Decimal(0);
    level6CountP1 = new Decimal(0);
    timeIntervalCount = new Decimal(0);

    level1CostP1 = new Decimal(10);
    level2CostP1 = new Decimal(100);
    level3CostP1 = new Decimal(1000);
    level4CostP1 = new Decimal(10000);
    level5CostP1 = new Decimal(100000);
    level6CostP1 = new Decimal(1000000);
    timeIntervalCost = new Decimal(100);
    
}
function initLayer2Data(){
    level1ValueP2 = new Decimal(0);
    level2ValueP2 = new Decimal(0);
    level3ValueP2 = new Decimal(0);
    level4ValueP2 = new Decimal(0);
    level5ValueP2 = new Decimal(0);
    level6ValueP2 = new Decimal(0);

    level1CountP2 = new Decimal(0);
    level2CountP2 = new Decimal(0);
    level3CountP2 = new Decimal(0);
    level4CountP2 = new Decimal(0);
    level5CountP2 = new Decimal(0);
    level6CountP2 = new Decimal(0);

    level1CostP2 = new Decimal(20);
    level2CostP2 = new Decimal(200);
    level3CostP2 = new Decimal(2000);
    level4CostP2 = new Decimal(20000);
    level5CostP2 = new Decimal(200000);
    level6CostP2 = new Decimal(2000000);


    multiplierValue = new Decimal(1);
    multiplierCost = new Decimal(200);
    multiplierCount = new Decimal(0);
}
function initLayer3Data(){
    level1ValueP3 = new Decimal(0);
    level2ValueP3 = new Decimal(0);
    level3ValueP3 = new Decimal(0);
    level4ValueP3 = new Decimal(0);
    level5ValueP3 = new Decimal(0);
    level6ValueP3 = new Decimal(0);

    level1CountP3 = new Decimal(0);
    level2CountP3 = new Decimal(0);
    level3CountP3 = new Decimal(0);
    level4CountP3 = new Decimal(0);
    level5CountP3 = new Decimal(0);
    level6CountP3 = new Decimal(0);

    level1CostP3 = new Decimal(30);
    level2CostP3 = new Decimal(300);
    level3CostP3 = new Decimal(3000);
    level4CostP3 = new Decimal(30000);
    level5CostP3 = new Decimal(300000);
    level6CostP3 = new Decimal(3000000);
    
    dividerValue = new Decimal(1);
    dividerCost = new Decimal(300);
    dividerCount = new Decimal(0);
}
function initPrestigeData(){
    prestigeMaxCount = 3;

    prestigeLayerCount = 1;
    prestigeLayerCost = new Decimal("100000");

    selectedLayer = 1;
}
function initNeutralData(){
    mainValue = new Decimal(10);
    absoluteIncome=new Decimal(0);
    relativeIncome=new Decimal(0);
}
function initAllData(){
    initLayer1Data();
    initLayer2Data();
    initLayer3Data();
    initPrestigeData();
    initNeutralData();
}