let reportedCases;
let currentlyInfected;
let severeCurrentlyInfected;
let myData;
let impact;
let severeImpact;
let daysInfectionsByTime;
let weeksInfectionsByTime;
let monthsInfectionsByTime;
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
  const days = myData.timeToElapse;
  const weeks = Math.trunc(myData.timeToElapse * 7);
  const months = Math.trunc(myData.timeToElapse * 30);

  if (myData.periodType === 'weeks') {
    weeksInfectionsByTime = Math.trunc(myData.timeToElapse * 7);
  } else if (myData.periodType === 'months') {
    monthsInfectionsByTime = Math.trunc(myData.timeToElapse * 30);
  } else {
    daysInfectionsByTime = days;
  }

  //  return { days, weeks, months };
  // Estimation in Days
  if (myData.periodType === 'weeks') {
    // For Current Week & Projected Week
    impact.currentlyInfected *= weeksInfectionsByTime;
    impact.currentlyInfected = impact.infectionsByRequestedTime;

    severeImpact.currentlyInfected *= Math.trunc((2 ** 19) / weeks);
    severeImpact.currentlyInfected = severeImpact.infectionsByRequestedTime;
  } else if (myData.periodType === 'months') {
    //  For Current Month & Projected Months
    impact.currentlyInfected *= monthsInfectionsByTime;
    impact.currentlyInfected = impact.infectionsByRequestedTime;

    severeImpact.currentlyInfected *= Math.trunc((2 ** 19) / months);
    severeImpact.currentlyInfected = severeImpact.infectionsByRequestedTime;
  } else {
    // For Current Projection
    impact.currentlyInfected *= daysInfectionsByTime;
    impact.currentlyInfected = impact.infectionsByRequestedTime;

    //  For Projected Days
    severeImpact.currentlyInfected *= Math.trunc(2 ** 19);
    severeImpact.currentlyInfected = severeImpact.infectionsByRequestedTime;
  }

  return {
    data,
    impact,
    severeImpact
  };
};//  Function Main Ends Here....

export default covid19ImpactEstimator;
