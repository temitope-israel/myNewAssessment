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
  currentlyInfected: 50,
  infectionsByRequestedTime: 30
};

const severeImpact = {
  currentlyInfected: 20,
  infectionsByRequestedTime: 15
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
    myDays = 1024;
    const weeks = 7;
    const months = 30;
    let typeOfPeriod;
    if (typeOfPeriod === 'days') {
      infectionsByRequestedTime = Math.trunc(impact.currentlyInfected * myDays);
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = Math.trunc(severeImpact.severeCurrentlyInfected * myDays);
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
      expect(impact).toMatchObject(severeImpact);
    }
    if (typeOfPeriod === 'weeks') {
      infectionsByRequestedTime = Math.trunc(impact.currentlyInfected
      * (myDays / weeks));
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = Math.trunc(severeImpact.severeCurrentlyInfected
      * (myDays / weeks));
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
      expect(impact).toMatchObject(severeImpact);
    } else {
      infectionsByRequestedTime = Math.trunc(impact.currentlyInfected
      * (myDays / months));
      impact.infectionsByRequestedTime = infectionsByRequestedTime;
      severeInfectionsByRequestedTime = Math.trunc(severeImpact.severeCurrentlyInfected
      * (myDays / months));
      severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
      expect(impact).toMatchObject(severeImpact);
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
