  let reportedCases;
  let currentlyInfected;
  let severeCurrentlyInfected;
  let infectionsByRequestedTime;
  let severeInfectionsByRequestedTime;
  let periodType;
input = {
  reportedCases,
  currentlyInfected,
}

impact = {}
severeImpact = {}
const covid19ImpactEstimator = (data) => {
  data = input;
   
  currentlyInfected = Math.trunc(input.reportedCases * 10);
  impact.currentlyInfected = currentlyInfected;

  severeCurrentlyInfected = Math.trunc(input.reportedCases * 50);
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  return {
    impact: {
      currentlyInfected,
      infectionsByRequestedTime
  },
    severeImpact: {
      severeCurrentlyInfected,
      severeInfectionsByRequestedTime
  }
};
};

function estimatePeriods(days){
days = 1024;
let weeks;
let months;

if (periodType === months) {
  periodType = days / 30;
} else if (periodType === weeks) {
  periodType = days / 7;
  infectionsByRequestedTime = Math.trunc(impact.currentlyInfected * periodType);
  impact.infectionsByRequestedTime = infectionsByRequestedTime;
  severeInfectionsByRequestedTime = Math.trunc(severeImpact.severeCurrentlyInfected * periodType);
  severeImpact.severeInfectionsByRequestedTime = severeInfectionsByRequestedTime;
} else {
  periodType = days;
}
}
estimatePeriods(periodType);
export default covid19ImpactEstimator;
