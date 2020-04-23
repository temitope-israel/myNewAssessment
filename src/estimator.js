let reportedCases;
let currentlyInfected;
let severeCurrentlyInfected;
let myData;
let impact;
let severeImpact;
const covid19ImpactEstimator = (data) => {
  myData = data;

  //  Input data
  myData = {
    region: {
      name: 'Africa',
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71
    },
    periodType: 'days',
    timeToElapse: 58,
    reportedCases: 674,
    population: 6622705,
    totalHospitalBeds: 1380614
  };

  impact = {
    currentlyInfected: 20
  };

  severeImpact = {
    currentlyInfected: 40
  };

  reportedCases = myData.reportedCases;
  currentlyInfected = reportedCases * 10;
  severeCurrentlyInfected = reportedCases * 50;

  //  Output Estimate of Currently Infected
  impact.currentlyInfected = currentlyInfected;
  severeImpact.currentlyInfected = severeCurrentlyInfected;
  //  Calculation for Infections By requested Time
  function getPeriod(period) {
    const days = myData.timeToElapse;
    const weeks = Math.trunc(myData.timeToElapse * 7);
    const months = Math.trunc(myData.timeToElapse * 30);

    if (period === 'weeks') {
      impact.infectionsByRequestedTime = impact.currentlyInfected * weeks;
      severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * weeks;
      impact.currentlyInfected = impact.infectionsByRequestedTime;
      severeImpact.currentlyInfected = severeImpact.infectionsByRequestedTime;
    } else if (period === 'months') {
      impact.infectionsByRequestedTime = impact.currentlyInfected * months;
      severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * months;
    } else {
      impact.infectionsByRequestedTime = impact.currentlyInfected * days;
      severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * days;
    }

    return { days, weeks, months };
  }


  //  Call of INfections by requested time calculation function
  getPeriod(myData.periodType);

  return {
    data,
    impact,
    severeImpact
  };
};//  Function Main Ends Here....

export default covid19ImpactEstimator;
