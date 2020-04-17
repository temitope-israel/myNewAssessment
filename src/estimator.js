const reportedCases = 20;
let currentlyInfected;
let severeCurrentlyInfected;
let infectionsByRequestedTime;
let severeInfectionsByRequestedTime;
let periodType;
let impact;
let severeImpact; 
let inputData;
inputData = {
  reportedCases
},
impact = {
 
},

severeImpact = {

};
const covid19ImpactEstimator = (data) => {
  data = inputData.reportedCases;
  currentlyInfected = data * 10;
  impact.currentlyInfected = currentlyInfected;
  severeCurrentlyInfected = data * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  infectionsByRequestedTime = impact.currentlyInfected * 1024;
  severeInfectionsByRequestedTime = severeImpact.currentlyInfected * 1024;

  function getPeriodType(days) {
    days = 1024;
    const weeks = 7;
    const months = 30; 
    let typeOfPeriod;
    if (typeOfPeriod === 'days') {
      infectionsByRequestedTime = currentlyInfected * Math.trunc(days);
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = severeCurrentlyInfected * Math.trunc(days);
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
    }
    if (typeOfPeriod === 'weeks') {    
      infectionsByRequestedTime = currentlyInfected * Math.trunc((days / weeks) * inputData.periodType);
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = severeCurrentlyInfected *
      Math.trunc((days / weeks) * inputData.periodType);         
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
    } else {
      infectionsByRequestedTime = currentlyInfected *
      Math.trunc((days / months) * inputData.periodType);
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = severeCurrentlyInfected *
      Math.trunc((days / months) * inputData.periodType);
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
    }
    return {
      days,
      weeks,
      months,
      typeOfPeriod
    }
  }
 
  getPeriodType(periodType);

  return {
    data: {
      inputData
    },
    impact: {
      currentlyInfected,
      infectionsByRequestedTime
    },
    severeimpact: {
      severeCurrentlyInfected,
      severeInfectionsByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
