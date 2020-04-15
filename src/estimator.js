const covid19ImpactEstimator = (data) =>{
  data.reportedCases = reportedCases;
  reportedCases = data.currentlyInfected * 10;
  impact.currentlyInfected = reportedCases;
  
  return {
    data: {
      reportedCases,
      currentlyInfected
    },
    impact: {},
    severeImpact: {}
  };
};

export default covid19ImpactEstimator;
