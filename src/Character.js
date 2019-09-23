import * as CharBase from './data/CharacterBaseStats.js';
import *  as CharGrowth from './data/CharacterGrowthRates.js';
import *  as ClassGrowth from './data/ClassGrowthRates.js';

export default class Character {

    constructor(unitName, className) {
        this.unitName = unitName;
        this.className = className;

        this.unitBaseStat = {};
        this.unitBaseStat = Object.assign(this.unitBaseStat, CharBase.name[unitName]);

        this.unitStat = {};
        this.unitStat = Object.assign(this.unitStat, this.unitBaseStat);

        this.unitGrowthRate = CharGrowth.name[unitName];
        this.classGrowthRate = ClassGrowth.name[className];
        this.level = 1;     
        this.totalGrowthRate = {};      
        this.computeTotalGrowth();
    }

    computeTotalGrowth() {
        this.totalGrowthRate = {
            "HP": 0,
            "Str": 0,
            "Mag": 0,
            "Dex": 0,
            "Spd": 0,
            "Lck": 0,
            "Def": 0,
            "Res": 0,
            "Cha": 0
        }      
        for (var stat in this.totalGrowthRate) {
            if (!this.classGrowthRate[stat]) this.classGrowthRate[stat] = 0;
            this.totalGrowthRate[stat] = parseInt(this.unitGrowthRate[stat]) + parseInt(this.classGrowthRate[stat]);
        }
    }

    updateChar(unitName) {
        this.unitName = unitName;
        this.unitBaseStat = Object.assign(this.unitBaseStat, CharBase.name[unitName]);
        this.unitStat = this.unitBaseStat;
        this.unitGrowthRate = CharGrowth.name[unitName];
        this.level = 1;
        this.computeTotalGrowth();
    }

    updateGrowth(className) {
        this.className = className;
        this.classGrowthRate = ClassGrowth.name[className];
        this.computeTotalGrowth();
    }

    calculateStat() {
        for (var stat in this.totalGrowthRate) {
            var num = Math.floor((Math.random() * 100) + 1);
            if (num <= this.totalGrowthRate[stat]) {
                this.unitStat[stat]++;
            }
        }
        this.level++;
    }
};