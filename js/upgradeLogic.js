function increaseValue(level,prestige){
    if(prestige == 1)
    {
        switch(level){
            case 1:level1ValueP1 = level1CountP1; return level1ValueP1;
            case 2:level2ValueP1 = level2CountP1.mul(2); return level2ValueP1;
            case 3:level3ValueP1 = level3CountP1.mul(3); return level3ValueP1;
            case 4:level4ValueP1 = level4CountP1.mul(4); return level4ValueP1;
            case 5:level5ValueP1 = level5CountP1.mul(5); return level5ValueP1;
            case 6:level6ValueP1 = level6CountP1.mul(6); return level6ValueP1;
        }
    }
    else if(prestige == 2)
    {
        switch(level){
            case 1:level1ValueP2 = level1CountP2; return level1ValueP2;
            case 2:level2ValueP2 = level2CountP2.pow(2); return level2ValueP2;
            case 3:level3ValueP2 = level3CountP2.pow(3); return level3ValueP2;
            case 4:level4ValueP2 = level4CountP2.pow(4); return level4ValueP2;
            case 5:level5ValueP2 = level5CountP2.pow(5); return level5ValueP2;
            case 6:level6ValueP2 = level6CountP2.pow(6); return level6ValueP2;
        }
    }
    else if(prestige == 3){
        switch(level){
            case 1:level1ValueP3 = new Decimal(1).pow(level1CountP3);; return level1ValueP3;
            case 2:level2ValueP3 = new Decimal(2).pow(level2CountP3);; return level2ValueP3;
            case 3:level3ValueP3 = new Decimal(3).pow(level3CountP3);; return level3ValueP3;
            case 4:level4ValueP3 = new Decimal(4).pow(level4CountP3);; return level4ValueP3;
            case 5:level5ValueP3 = new Decimal(5).pow(level5CountP3);; return level5ValueP3;
            case 6:level6ValueP3 = new Decimal(6).pow(level6CountP3);; return level6ValueP3;
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
    else if(prestige==3){
        switch (level){
            case 1: level1CountP3= level1CountP3.plus(1);return level1CountP3;
            case 2: level2CountP3= level2CountP3.plus(1);return level2CountP3;
            case 3: level3CountP3= level3CountP3.plus(1);return level3CountP3;
            case 4: level4CountP3= level4CountP3.plus(1);return level4CountP3;
            case 5: level5CountP3= level5CountP3.plus(1);return level5CountP3;
            case 6: level6CountP3= level6CountP3.plus(1);return level6CountP3;
        }
    }
}
function increaseCost(level,prestige){
    if(prestige==1){
        switch (level){
            case 1: level1CostP1 = level1CostP1.mul(1.1);return level1CostP1;
            case 2: level2CostP1 = level2CostP1.mul(1.2);return level2CostP1;
            case 3: level3CostP1 = level3CostP1.mul(1.3);return level3CostP1;
            case 4: level4CostP1 = level4CostP1.mul(1.4);return level4CostP1;
            case 5: level5CostP1 = level5CostP1.mul(1.5);return level5CostP1;
            case 6: level6CostP1 = level6CostP1.mul(1.6);return level6CostP1;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: level1CostP2 = level1CostP2.mul(level1CountP2.div(1000).plus(1.1));return level1CostP2;
            case 2: level2CostP2 = level2CostP2.mul(level2CountP2.div(1000).plus(1.2));return level2CostP2;
            case 3: level3CostP2 = level3CostP2.mul(level3CountP2.div(1000).plus(1.3));return level3CostP2;
            case 4: level4CostP2 = level4CostP2.mul(level4CountP2.div(1000).plus(1.4));return level4CostP2;
            case 5: level5CostP2 = level5CostP2.mul(level5CountP2.div(1000).plus(1.5));return level5CostP2;
            case 6: level6CostP2 = level6CostP2.mul(level6CountP2.div(1000).plus(1.6));return level6CostP2;
        }
    }
    else if(prestige==3){
        switch (level){
            case 1: level1CostP3 = level1CostP3.mul(1).mul(level1CountP3);return level1CostP3;
            case 2: level2CostP3 = level2CostP3.mul(2).mul(level2CountP3);return level2CostP3;
            case 3: level3CostP3 = level3CostP3.mul(3).mul(level3CountP3);return level3CostP3;
            case 4: level4CostP3 = level4CostP3.mul(4).mul(level4CountP3);return level4CostP3;
            case 5: level5CostP3 = level5CostP3.mul(5).mul(level5CountP3);return level5CostP3;
            case 6: level6CostP3 = level6CostP3.mul(6).mul(level6CountP3);return level6CostP3;
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
    else if(prestige==3){
        switch (level){
            case 1: return level1CostP3;
            case 2: return level2CostP3;
            case 3: return level3CostP3;
            case 4: return level4CostP3;
            case 5: return level5CostP3;
            case 6: return level6CostP3;
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
    else if(prestige==3){
        switch (level){
            case 1: return level1ValueP3;
            case 2: return level2ValueP3;
            case 3: return level3ValueP3;
            case 4: return level4ValueP3;
            case 5: return level5ValueP3;
            case 6: return level6ValueP3;
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
    else if(prestige==3){
        switch (level){
            case 1: return level1CountP3;
            case 2: return level2CountP3;
            case 3: return level3CountP3;
            case 4: return level4CountP3;
            case 5: return level5CountP3;
            case 6: return level6CountP3;
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
    else if(prestige==3){
        switch (level){
            case 1: level1CostP3 = value;return level1CostP3;
            case 2: level2CostP3 = value;return level2CostP3;
            case 3: level3CostP3 = value;return level3CostP3;
            case 4: level4CostP3 = value;return level4CostP3;
            case 5: level5CostP3 = value;return level5CostP3;
            case 6: level6CostP3 = value;return level6CostP3;
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
    else if(prestige==3){
        switch (level){
            case 1: level1ValueP3 = value;return level1ValueP3;
            case 2: level2ValueP3 = value;return level2ValueP3;
            case 3: level3ValueP3 = value;return level3ValueP3;
            case 4: level4ValueP3 = value;return level4ValueP3;
            case 5: level5ValueP3 = value;return level5ValueP3;
            case 6: level6ValueP3 = value;return level6ValueP3;
            default: return undefined;
        }
    }
}
function setCount(level,value,prestige){
    if(prestige==1){
        switch (level){
            case 1: level1CountP1=value;return level1CountP1;
            case 2: level2CountP1=value;return level2CountP1;
            case 3: level3CountP1=value;return level3CountP1;
            case 4: level4CountP1=value;return level4CountP1;
            case 5: level5CountP1=value;return level5CountP1;
            case 6: level6CountP1=value;return level6CountP1;
        }
    }
    else if(prestige==2){
        switch (level){
            case 1: level1CountP2=value;return level1CountP2;
            case 2: level2CountP2=value;return level2CountP2;
            case 3: level3CountP2=value;return level3CountP2;
            case 4: level4CountP2=value;return level4CountP2;
            case 5: level5CountP2=value;return level5CountP2;
            case 6: level6CountP2=value;return level6CountP2;
        }
    }
    else if(prestige==3){
        switch (level){
            case 1: level1CountP3=value;return level1CountP3;
            case 2: level2CountP3=value;return level2CountP3;
            case 3: level3CountP3=value;return level3CountP3;
            case 4: level4CountP3=value;return level4CountP3;
            case 5: level5CountP3=value;return level5CountP3;
            case 6: level6CountP3=value;return level6CountP3;
        }
    }
}