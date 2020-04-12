const covid19ImpactEstimator = (data) =>{
  data: {};
  const impact = {};
  const severeImpact = {};

  inputData.reportedCases = '';
  impact.currentlyInfected = data.reportedCases * 10;
  severeImpact.currentlyInfected = data.reportedCases * 50;

  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;

  return { impact, severeImpact };
};

export default covid19ImpactEstimator;
