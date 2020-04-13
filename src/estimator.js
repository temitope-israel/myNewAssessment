data,
impact = {
  currentlyInfected: data.reportedCases * 10,
  infectionsByRequestedTime: currentlyInfected * 512
}

severeImpact = {
  currentlyInfected: data.reportedCases * 50,
  infectionsByRequestedTime: currentlyInfected * 512
}

let days, weeks, months;
days = 7;
weeks = 7;
months = 30;
const covid19ImpactEstimator = (data) =>{
  
};

export default covid19ImpactEstimator;
