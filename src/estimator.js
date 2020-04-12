const covid19ImpactEstimator = (data) => {
  inputData = data;
  inputData ={}
  const impact ={};
  const severeImpact ={};

  inputData.reportedCases = '';
  impact.currentlyInfected = inputData.reportedCases * 10;
  severeImpact.currentlyInfected = input.reportedCases * 50;

  impact.infectionsByRequestedTime = impact.currentlyInfected * 512;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 512;

  return{impact, severeImpact};
  }

  export default covid19ImpactEstimator;