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
  } else {
    infectionTime = data.timeToElapse;
  }
  //  return { days, weeks, months };
  // Estimation in Weeks

  // For Projected Days
  impact.infectionsByRequestedTime = Math.trunc(impact.currentlyInfected
  * (2 ** (infectionTime / 3)));

  severeImpact.infectionsByRequestedTime = Math.trunc(severeImpact.currentlyInfected
  * (2 ** (infectionTime / 3)));

  // ************CHALLENGE*********************CHALLENGE******************
  // ****************2***********TWO**************2***********************

  // 15% of InfectionsByRequested Time

  impact.severeCasesByRequestedTime = Math.trunc(0.15
    * impact.infectionsByRequestedTime);
  severeImpact.severeCasesByRequestedTime = Math.trunc(0.15
    * severeImpact.infectionsByRequestedTime);

  impact.hospitalBedsByRequestedTime = Math.trunc((impact.severeCasesByRequestedTime
    - (0.65 * data.totalHospitalBeds)) * (2 ** (infectionTime / 3)));
  severeImpact.hospitalBedsByRequestedTime = Math.trunc((severeImpact.severeCasesByRequestedTime
    - (0.65 * data.totalHospitalBeds)) * (2 ** (infectionTime / 3)));

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
