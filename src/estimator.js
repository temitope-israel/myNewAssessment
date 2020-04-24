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
    currentlyInfected
  };

  severeImpact = {
    currentlyInfected
  };
  //  Estimation of Reported Cases
  reportedCases = myData.reportedCases;
  currentlyInfected = reportedCases * 10;
  severeCurrentlyInfected = reportedCases * 50;

  //  Output Estimate of Currently Infected
  impact.currentlyInfected = currentlyInfected;
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  //  Calculation for Normalisation to Days
  const days = myData.timeToElapse;
  const weeks = Math.trunc(myData.timeToElapse * 7);
  const months = Math.trunc(myData.timeToElapse * 30);

  //  return { days, weeks, months };
  // Estimation in Weeks
  if (myData.periodType === 'days') {
    // For Current Week & Projected Week
    impact.currentlyInfected *= days;
    impact.infectionsByRequestedTime = impact.currentlyInfected;

    severeImpact.currentlyInfected *= Math.trunc((2 ** 19) / days);
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected;
  } else if (myData.periodType === 'weeks') {
    //  For Current Month & Projected Months
    impact.currentlyInfected *= weeks;
    impact.infectionsByRequestedTime = impact.currentlyInfected;

    severeImpact.currentlyInfected *= Math.trunc((2 ** 19) / weeks);
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected;
  } else {
    // For Current Projection
    impact.currentlyInfected *= months;
    impact.infectionsByRequestedTime = impact.currentlyInfected;

    severeImpact.currentlyInfected *= Math.trunc((2 ** 19) / months);
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected;
  }

  return {
    data,
    impact,
    severeImpact
  };
};//  Function Main Ends Here....

export default covid19ImpactEstimator;
