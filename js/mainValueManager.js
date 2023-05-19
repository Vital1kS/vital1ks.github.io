function makeAddition(){
    let tempValue = new Decimal(0);
    tempValue=tempValue.plus(level1ValueP1);
    tempValue=tempValue.plus(level2ValueP1);
    tempValue=tempValue.plus(level3ValueP1);
    tempValue=tempValue.plus(level4ValueP1);
    tempValue=tempValue.plus(level5ValueP1);
    tempValue=tempValue.plus(level6ValueP1);
    tempValue=tempValue.plus(level1ValueP2);
    tempValue=tempValue.plus(level2ValueP2);
    tempValue=tempValue.plus(level3ValueP2);
    tempValue=tempValue.plus(level4ValueP2);
    tempValue=tempValue.plus(level5ValueP2);
    tempValue=tempValue.plus(level6ValueP2);
    tempValue=tempValue.mul(multiplierValue);    
    mainValue=mainValue.plus(tempValue);
    refreshText();
    saveData();
}