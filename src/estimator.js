let currentlyInfected;
let severeCurrentlyInfected;
let infectionsByRequestedTime;
let severeInfectionsByRequestedTime;
let periodType;

const inputData = {
  reportedCases: 674,
  periodType: 'days'
};
const impact = {
  currentlyInfected,
  infectionsByRequestedTime
};

const severeImpact = {
  currentlyInfected,
  infectionsByRequestedTime
};
const covid19ImpactEstimator = (data) => {
  let myData = data;
  myData = inputData.reportedCases;
  currentlyInfected = myData * 10;
  impact.currentlyInfected = currentlyInfected;
  severeCurrentlyInfected = myData * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  function getPeriodType(days) {
    let myDays = days;
    const months = myDays / 30;
    myDays -= months * 30;
    const weeks = myDays / 7;
    myDays -= weeks * 7;
    periodType = inputData.periodType;
    if (periodType === 'days') {
      myDays = 1024;
      infectionsByRequestedTime = Math.trunc(impact.currentlyInfected * myDays);
      infectionsByRequestedTime = Math.trunc(impact.currentlyInfected * weeks);
      infectionsByRequestedTime = Math.trunc(impact.currentlyInfected * months);
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = Math.trunc(severeImpact.currentlyInfected * myDays);
      severeInfectionsByRequestedTime = Math.trunc(severeImpact.currentlyInfected * weeks);
      severeInfectionsByRequestedTime = Math.trunc(severeImpact.currentlyInfected * months);
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
    } else {
      periodType = 0;
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
