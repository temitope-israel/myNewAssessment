let reportedCases;
let currentlyInfected;
let severeCurrentlyInfected;
let impact;
let severeImpact;
const covid19ImpactEstimator = (data) => {
  impact = {
    currentlyInfected
  };

  severeImpact = {
    currentlyInfected
  };
  //  Estimation of Reported Cases
  reportedCases = data.reportedCases;


  // IMPACT ESTIMATIONS
  currentlyInfected = reportedCases * 10;
  impact.currentlyInfected = currentlyInfected;

  // SEVERE IMPACT ESTIMATION
  severeCurrentlyInfected = reportedCases * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  //  Calculation for Normalisation to Days
  const days = data.timeToElapse; // 58
  const weeks = Math.trunc(data.timeToElapse / 7);
  const months = Math.trunc(data.timeToElapse / 30);
  let weeksCurrentlyInfected;
  let monthsCurrentlyInfected;
  let weeksSevereCurrentlyInfected;
  let monthsSevereCurrentlyInfected;

  //  return { days, weeks, months };
  // Estimation in Weeks
  if (data.periodType === 'days') {
    // For Projected Days
    currentlyInfected = impact.currentlyInfected * Math.trunc(2 ** (days / 3));

    weeksCurrentlyInfected = impact.currentlyInfected * Math.trunc((2 ** (days / 3)) * weeks);

    monthsCurrentlyInfected = impact.currentlyInfected * Math.trunc((2 ** (days / 3)) * months);

    severeCurrentlyInfected = severeImpact.currentlyInfected * Math.trunc(2 ** (days / 3));

    weeksSevereCurrentlyInfected = severeImpact.currentlyInfected * Math.trunc((2 ** (days / 3)) * weeks);

    monthsSevereCurrentlyInfected = severeImpact.currentlyInfected * Math.trunc((2 ** (days / 3)) * months);

    currentlyInfected = impact.infectionsByRequestedTime;
    weeksCurrentlyInfected = impact.infectionsByRequestedTime;
    monthsCurrentlyInfected = impact.infectionsByRequestedTime;

    severeCurrentlyInfected = severeImpact.infectionsByRequestedTime;
    weeksSevereCurrentlyInfected = severeImpact.infectionsByRequestedTime;
    monthsSevereCurrentlyInfected = severeImpact.infectionsByRequestedTime;
  } else {
    data.periodType = 0;
  }

  return {
    data: {
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
    },
    impact,
    severeImpact
  };
};//  Function Main Ends Here....

export default covid19ImpactEstimator;
