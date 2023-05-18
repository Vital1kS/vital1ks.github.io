function makeAddition(){
    mainValue=mainValue.plus(level1Value);
    mainValue=mainValue.plus(level2Value);
    mainValue=mainValue.plus(level3Value);
    mainValue=mainValue.plus(level4Value);
    mainValue=mainValue.plus(level5Value);
    mainValue=mainValue.plus(level6Value);
    refreshText();
    saveData();
}