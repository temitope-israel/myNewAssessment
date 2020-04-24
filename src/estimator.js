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

  let infectionTime;
  //  Calculation for Normalisation to Days
  if (data.periodType === 'weeks') {
    infectionTime = Math.trunc(data.timeToElapse * 7);
  } else if (data.periodType === 'months') {
    infectionTime = Math.trunc(data.timeToElapse * 30);
  } else infectionTime = Math.trunc(data.timeToElapse); // 58
  //  return { days, weeks, months };
  // Estimation in Weeks


    // For Projected Days
    impact.infectionsByRequestedTime = impact.currentlyInfected
    * Math.trunc(2 ** (infectionTime / 3));

    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected
    * Math.trunc(2 ** (infectionTime / 3));

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
