let reportedCases;
let currentlyInfected;
let severeCurrentlyInfected;
let myData;
let impact;
let severeImpact;
/*  let daysInfectionsByTime;
let weeksInfectionsByTime;
let monthsInfectionsByTime; */
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

  if (myData.periodType === 'weeks') {
    weeks = weeks;
  } else if (myData.periodType === 'months') {
    months = months;
  } else {
    days = days;
  } //  Ends Here...

  //  return { days, weeks, months };
  // Estimation in Weeks
  if (myData.periodType === 'days') {
    // For Current Week & Projected Week
    currentlyInfected *= days;
    impact.infectionsByRequestedTime = currentlyInfected;

    severeCurrentlyInfected *= Math.trunc((2 ** 19) / days);
    severeImpact.infectionsByRequestedTime = severeCurrentlyInfected;
  } /*  else if (myData.periodType === 'months') {
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
  }  */

  return {
    data,
    impact,
    severeImpact
  };
};//  Function Main Ends Here....

export default covid19ImpactEstimator;
