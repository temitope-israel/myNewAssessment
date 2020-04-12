const covid19ImpactEstimator = (data) => {
  // INPUT DATA
  
  // OUTPUT DATA
  const impact = {};
  const severeImpact = {};

  // CHALLENGE ONE
  // ESTIMATING THE NUMBER OF CURRENTLY INFECTED PEOPLE
  let currentlyInfectedImpact;
  let currentlyInfectedSevereImpact;
  data.reportedCases = reportedCases;
  currentlyInfectedImpact = reportedCases * 10;
  impact.currentlyInfected = currentlyInfectedImpact;
  
  data.reportedCases = reportedCases;
  currentlyInfectedSevereImpact = reportedCases * 50;
  severeImpact.currentlyInfected = currentlyInfectedSevereImpact;

  // INFECTION BY REQUESTED TIME FOR IMPACT
  let infectionsByRequestTimeImpact;
  let infectionsByRequestTimeSevereImpact;
  infectionsByRequestTimeImpact = impact.currentlyInfected * 512;
  impact.infectionsByRequestedTime = infectionsByRequestTimeImpact;
 
  // INFECTION BY REQUESTED TIME FOR SEVERE IMPACT
  infectionsByRequestTimeSevereImpact = severeImpact.currentlyInfected * 512;
  severeImpact.infectionsByRequestedTime = infectionsByRequestTimeSevereImpact;
  }

  export default covid19ImpactEstimator;


