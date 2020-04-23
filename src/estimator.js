let reportedCases;
let currentlyInfected;
let severeCurrentlyInfected;
let myData;
let impact;
let severeImpact;
let infectionsByTime;
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

  //  Calculation for Infections By requested Time
  function getPeriod(period) {
    const days = myData.timeToElapse;
    const weeks = Math.trunc(myData.timeToElapse * 7);
    const months = Math.trunc(myData.timeToElapse * 30);

    if (period === 'weeks') {
      infectionsByTime = Math.trunc(myData.timeToElapse * 7);
    } else if (period === 'months') {
      infectionsByTime = Math.trunc(myData.timeToElapse * 30);
    } else {
      infectionsByTime = myData.timeToElapse;
    }

    return { days, weeks, months };
  }

  reportedCases = myData.reportedCases;
  currentlyInfected = reportedCases * 10;
  severeCurrentlyInfected = reportedCases * 50;

  //  Output Estimate of Currently Infected
  impact.currentlyInfected = currentlyInfected;
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  // Estimation in Days
  if (myData.timeToElapse) {
    getPeriod(myData.periodType);
    // For Current Projection
    impact.currentlyInfected *= (infectionsByTime);
    impact.currentlyInfected = impact.infectionsByTime;

    //  For Projected Days
    severeImpact.currentlyInfected *= Math.trunc((2 ** 19) / days.getPeriod());
    severeImpact.currentlyInfected = severeImpact.infectionsByTime;
  }

  return {
    data,
    impact,
    severeImpact
  };
};//  Function Main Ends Here....

export default covid19ImpactEstimator;
