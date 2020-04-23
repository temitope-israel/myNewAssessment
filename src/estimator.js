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
    periodType: "days",
    reportedCases: 40
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

  //  Call of INfections by requested time calculation function
  getPeriod(myData.periodType);

  return {
    data,
    impact,
    severeImpact
  };
};//  Function Main Ends Here....

//  Calculation for Infections By requested Time
function getPeriod(period) {
  const days;
  const weeks;
  const months;
  months = 1024;
  days = Math.trunc(months / 30);
  weeks = Math.trunc(days * 7);
  months = Math.trunc(days * 30);

  if (period === 'days') {
    impact.infectionsByRequestedTime = impact.currentlyInfected * days;
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * days;
  } else if (period === 'weeks') {
    impact.infectionsByRequestedTime = impact.currentlyInfected * weeks;
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * weeks;
  } else if (period === 'months') {
    impact.infectionsByRequestedTime = impact.currentlyInfected * months;
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * months;
  } else {
    period === 0;
  }

  return { days, weeks, months };
}

export default covid19ImpactEstimator;
