function increaseValue(level,prestige){
    if(prestige == 1)
    {
        switch(level){
            case 1:level1ValueP1 = level1CountP1; return level1ValueP1;
            case 2:level2ValueP1 = level2CountP1.pow(2); return level2ValueP1;
            case 3:level3ValueP1 = level3CountP1.pow(3); return level3ValueP1;
            case 4:level4ValueP1 = level4CountP1.pow(4); return level4ValueP1;
            case 5:level5ValueP1 = level5CountP1.pow(5); return level5ValueP1;
            case 6:level6ValueP1 = level6CountP1.pow(6); return level6ValueP1;
        }
    }
    else if(prestige == 2){
        switch(level){
            case 1:level1ValueP2 = new Decimal(1).pow(level1CountP2);; return level1ValueP2;
            case 2:level2ValueP2 = new Decimal(2).pow(level2CountP2);; return level2ValueP2;
            case 3:level3ValueP2 = new Decimal(3).pow(level3CountP2);; return level3ValueP2;
            case 4:level4ValueP2 = new Decimal(4).pow(level4CountP2);; return level4ValueP2;
            case 5:level5ValueP2 = new Decimal(5).pow(level5CountP2);; return level5ValueP2;
            case 6:level6ValueP2 = new Decimal(6).pow(level6CountP2);; return level6ValueP2;
        }
    }
}
function increaseCount(level,prestige){
    if(prestige==1){
        switch (level){
            case 1: level1CountP1= level1CountP1.plus(1);return level1CountP1;
            case 2: level2CountP1= level2CountP1.plus(1);return level2CountP1;
            case 3: level3CountP1= level3CountP1.plus(1);return level3CountP1;
            case 4: level4CountP1= level4CountP1.plus(1);return level4CountP1;
            case 5: level5CountP1= level5CountP1.plus(1);return level5CountP1;
            case 6: level6CountP1= level6CountP1.plus(1);return level6CountP1;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: level1CountP2= level1CountP2.plus(1);return level1CountP2;
            case 2: level2CountP2= level2CountP2.plus(1);return level2CountP2;
            case 3: level3CountP2= level3CountP2.plus(1);return level3CountP2;
            case 4: level4CountP2= level4CountP2.plus(1);return level4CountP2;
            case 5: level5CountP2= level5CountP2.plus(1);return level5CountP2;
            case 6: level6CountP2= level6CountP2.plus(1);return level6CountP2;
        }
    }
}
function increaseCost(level,prestige){
    if(prestige==1){
        switch (level){
            case 1: level1CostP1 = level1CostP1.mul(level1CountP1.div(1000).plus(1.1));return level1CostP1;
            case 2: level2CostP1 = level2CostP1.mul(level2CountP1.div(1000).plus(1.2));return level2CostP1;
            case 3: level3CostP1 = level3CostP1.mul(level3CountP1.div(1000).plus(1.3));return level3CostP1;
            case 4: level4CostP1 = level4CostP1.mul(level4CountP1.div(1000).plus(1.4));return level4CostP1;
            case 5: level5CostP1 = level5CostP1.mul(level5CountP1.div(1000).plus(1.5));return level5CostP1;
            case 6: level6CostP1 = level6CostP1.mul(level6CountP1.div(1000).plus(1.6));return level6CostP1;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: level1CostP2 = level1CostP2.mul(1).mul(level1CountP2);return level1CostP2;
            case 2: level2CostP2 = level2CostP2.mul(2).mul(level2CountP2);return level2CostP2;
            case 3: level3CostP2 = level3CostP2.mul(3).mul(level3CountP2);return level3CostP2;
            case 4: level4CostP2 = level4CostP2.mul(4).mul(level4CountP2);return level4CostP2;
            case 5: level5CostP2 = level5CostP2.mul(5).mul(level5CountP2);return level5CostP2;
            case 6: level6CostP2 = level6CostP2.mul(6).mul(level6CountP2);return level6CostP2;
        }
    }
}
function getCost(level,prestige){
    if(prestige==1){
        switch (level){
            case 1: return level1CostP1;
            case 2: return level2CostP1;
            case 3: return level3CostP1;
            case 4: return level4CostP1;
            case 5: return level5CostP1;
            case 6: return level6CostP1;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: return level1CostP2;
            case 2: return level2CostP2;
            case 3: return level3CostP2;
            case 4: return level4CostP2;
            case 5: return level5CostP2;
            case 6: return level6CostP2;
        }
    }
}
function getValue(level,prestige){
    if(prestige==1){
        switch (level){
            case 1: return level1ValueP1;
            case 2: return level2ValueP1;
            case 3: return level3ValueP1;
            case 4: return level4ValueP1;
            case 5: return level5ValueP1;
            case 6: return level6ValueP1;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: return level1ValueP2;
            case 2: return level2ValueP2;
            case 3: return level3ValueP2;
            case 4: return level4ValueP2;
            case 5: return level5ValueP2;
            case 6: return level6ValueP2;
        }
    }
}
function getCount(level,prestige){
    if(prestige==1){
        switch (level){
            case 1: return level1CountP1;
            case 2: return level2CountP1;
            case 3: return level3CountP1;
            case 4: return level4CountP1;
            case 5: return level5CountP1;
            case 6: return level6CountP1;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: return level1CountP2;
            case 2: return level2CountP2;
            case 3: return level3CountP2;
            case 4: return level4CountP2;
            case 5: return level5CountP2;
            case 6: return level6CountP2;
        }
    }
}
function setCost(level, value,prestige){
    if(prestige==1){
        switch (level){
            case 1: level1CostP1 = value;return level1CostP1;
            case 2: level2CostP1 = value;return level2CostP1;
            case 3: level3CostP1 = value;return level3CostP1;
            case 4: level4CostP1 = value;return level4CostP1;
            case 5: level5CostP1 = value;return level5CostP1;
            case 6: level6CostP1 = value;return level6CostP1;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: level1CostP2 = value;return level1CostP2;
            case 2: level2CostP2 = value;return level2CostP2;
            case 3: level3CostP2 = value;return level3CostP2;
            case 4: level4CostP2 = value;return level4CostP2;
            case 5: level5CostP2 = value;return level5CostP2;
            case 6: level6CostP2 = value;return level6CostP2;
        }
    }
}
function setValue(level,value,prestige){
    if(prestige==1){
        switch (level){
            case 1: level1ValueP1 = value;return level1ValueP1;
            case 2: level2ValueP1 = value;return level2ValueP1;
            case 3: level3ValueP1 = value;return level3ValueP1;
            case 4: level4ValueP1 = value;return level4ValueP1;
            case 5: level5ValueP1 = value;return level5ValueP1;
            case 6: level6ValueP1 = value;return level6ValueP1;
            default: return undefined;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: level1ValueP2 = value;return level1ValueP2;
            case 2: level2ValueP2 = value;return level2ValueP2;
            case 3: level3ValueP2 = value;return level3ValueP2;
            case 4: level4ValueP2 = value;return level4ValueP2;
            case 5: level5ValueP2 = value;return level5ValueP2;
            case 6: level6ValueP2 = value;return level6ValueP2;
            default: return undefined;
        }
    }
}
function setCount(level,value,prestige){
    if(prestige==1){
        switch (level){
            case 1: level1CountP1=value; return level1CountP1;
            case 2: level2CountP1=value;return level2CountP1;
            case 3: level3CountP1=value;return level3CountP1;
            case 4: level4CountP1=value;return level4CountP1;
            case 5: level5CountP1=value;return level5CountP1;
            case 6: level6CountP1=value;return level6CountP1;
            default: return undefined;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: level1CountP2=value; return level1CountP2;
            case 2: level2CountP2=value;return level2CountP2;
            case 3: level3CountP2=value;return level3CountP2;
            case 4: level4CountP2=value;return level4CountP2;
            case 5: level5CountP2=value;return level5CountP2;
            case 6: level6CountP2=value;return level6CountP2;
            default: return undefined;
        }
    }
}