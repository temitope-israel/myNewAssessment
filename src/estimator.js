const reportedCases = 20;
let currentlyInfected;
let severeCurrentlyInfected;
let infectionsByRequestedTime;
let severeInfectionsByRequestedTime;
let periodType;

const inputData = {
  reportedCases
};
const impact = {

};

const severeImpact = {

};
const covid19ImpactEstimator = (data) => {
  myData = data;
  myData = inputData.reportedCases;
  currentlyInfected = myData * 10;
  impact.currentlyInfected = currentlyInfected;
  severeCurrentlyInfected = myData * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  infectionsByRequestedTime = impact.currentlyInfected * 1024;
  severeInfectionsByRequestedTime = severeImpact.currentlyInfected * 1024;

  function getPeriodType(days) {
    const myDays = days;
    myDays = 1024;
    const weeks = 7;
    const months = 30;
    let typeOfPeriod;
    if (typeOfPeriod === 'days') {
      infectionsByRequestedTime = currentlyInfected * Math.trunc(myDays);
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = severeCurrentlyInfected * Math.trunc(myDays);
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
    }
    if (typeOfPeriod === 'weeks') {
      infectionsByRequestedTime = currentlyInfected
      * Math.trunc((myDays / weeks) * inputData.periodType);
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = severeCurrentlyInfected
      * Math.trunc((myDays / weeks) * inputData.periodType);
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
    } else {
      infectionsByRequestedTime = currentlyInfected
      * Math.trunc((myDays / months) * inputData.periodType);
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = severeCurrentlyInfected
      * Math.trunc((myDays / months) * inputData.periodType);
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
    }
    return {
      days,
      weeks,
      months,
      typeOfPeriod
    };
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
