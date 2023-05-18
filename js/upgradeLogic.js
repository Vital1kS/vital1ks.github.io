function increaseValue(level){
    if(level == 1){
        level1Value = level1Count;
    }
    else if(level == 2){
        level2Value = level2Count.pow(2);
    }
    else if(level == 3){
        level3Value = level3Count.pow(3);
    }
    else if(level == 4){
        level4Value = level4Count.pow(4);
    }
    else if(level == 5){
        level5Value = level5Count.pow(5);
    }
    else if(level == 6){
        level6Value = level6Count.pow(6);
    }
}
function increaseCount(level){
    switch (level){
        case 1: level1Count= level1Count.plus(1);return level1Count;
        case 2: level2Count= level2Count.plus(1);return level2Count;
        case 3: level3Count= level3Count.plus(1);return level3Count;
        case 4: level4Count= level4Count.plus(1);return level4Count;
        case 5: level5Count= level5Count.plus(1);return level5Count;
        case 6: level6Count= level6Count.plus(1);return level6Count;
        default: return undefined;
    }
}
function increaseCost(level){
    switch (level){
        case 1: level1Cost = level1Cost.mul(level1Count.div(1000).plus(1.1));return level1Cost;
        case 2: level2Cost = level2Cost.mul(level2Count.div(1000).plus(1.2));return level2Cost;
        case 3: level3Cost = level3Cost.mul(level3Count.div(1000).plus(1.3));return level3Cost;
        case 4: level4Cost = level4Cost.mul(level4Count.div(1000).plus(1.4));return level4Cost;
        case 5: level5Cost = level5Cost.mul(level5Count.div(1000).plus(1.5));return level5Cost;
        case 6: level6Cost = level6Cost.mul(level6Count.div(1000).plus(1.6));return level6Cost;
        default: return undefined;
    }
}
function getCost(level){
    switch (level){
        case 1: return level1Cost;
        case 2: return level2Cost;
        case 3: return level3Cost;
        case 4: return level4Cost;
        case 5: return level5Cost;
        case 6: return level6Cost;
        default: return undefined;
    }
}
function getValue(level){
    
    switch (level){
        case 1: return level1Value;
        case 2: return level2Value;
        case 3: return level3Value;
        case 4: return level4Value;
        case 5: return level5Value;
        case 6: return level6Value;
        default: return undefined;
    }
}
function getCount(level){
    switch (level){
        case 1: return level1Count;
        case 2: return level2Count;
        case 3: return level3Count;
        case 4: return level4Count;
        case 5: return level5Count;
        case 6: return level6Count;
        default: return undefined;
    }
}
function setCost(level, value){
    switch (level){
        case 1: level1Cost = value;return level1Cost;
        case 2: level2Cost = value;return level2Cost;
        case 3: level3Cost = value;return level3Cost;
        case 4: level4Cost = value;return level4Cost;
        case 5: level5Cost = value;return level5Cost;
        case 6: level6Cost = value;return level6Cost;
        default: return undefined;
    }
}
function setValue(level,value){
    switch (level){
        case 1: level1Value = value;return level1Value;
        case 2: level2Value = value;return level2Value;
        case 3: level3Value = value;return level3Value;
        case 4: level4Value = value;return level4Value;
        case 5: level5Value = value;return level5Value;
        case 6: level6Value = value;return level6Value;
        default: return undefined;
    }
}
function setCount(level,value){
    switch (level){
        case 1: level1Count=value; return level1Count;
        case 2: level2Count=value;return level2Count;
        case 3: level3Count=value;return level3Count;
        case 4: level4Count=value;return level4Count;
        case 5: level5Count=value;return level5Count;
        case 6: level6Count=value;return level6Count;
        default: return undefined;
    }
}