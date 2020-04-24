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
    infectionTime = data.timeToElapse * 7;
  } else if (data.periodType === 'months') {
    infectionTime = data.timeToElapse * 30;
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
  const ImpactSevereCasesByRequestedTime = Math.trunc(0.15
    * impact.infectionsByRequestedTime);
  const severeImpactSevereCasesByRequestedTime = Math.trunc(0.15
    * severeImpact.infectionsByRequestedTime);

  impact.severeCasesByRequestedTime = ImpactSevereCasesByRequestedTime;
  severeImpact.severeCasesByRequestedTime = severeImpactSevereCasesByRequestedTime;

  //let usedBeds;
  // let availableBeds;
  // availableBeds = Math.trunc(data.totalHospitalBeds * 0.35);
  const usedBeds = Math.trunc(data.totalHospitalBeds * 0.65);
  if (impact.severeCasesByRequestedTime <= usedBeds
    && severeImpact.severeCasesByRequestedTime <= usedBeds) {
    impact.hospitalBedsByRequestedTime = Math.trunc(impact.severeCasesByRequestedTime
      - usedBeds);
    severeImpact.hospitalBedsByRequestedTime = Math.trunc(severeImpact.severeCasesByRequestedTime
      - usedBeds);
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
