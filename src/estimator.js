const covid19ImpactEstimator = (data) => {
  // INPUT DATA
  
  // OUTPUT DATA
  data = {};
  const impact = {};
  const severeImpact = {};

  // CHALLENGE ONE
  // ESTIMATING THE NUMBER OF CURRENTLY INFECTED PEOPLE
  let currentlyInfectedImpact;
  let currentlyInfectedSevereImpact;
  let reportedCases;
  reportedCases = data.reportedCases;
  
  impact.currentlyInfected = reportedCases * 10;
  severeImpact.currentlyInfected = reportedCases * 50;
  
  }

  export default covid19ImpactEstimator;


