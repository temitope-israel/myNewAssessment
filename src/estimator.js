const covid19ImpactEstimator = (data) => {
  let reportedCases;
  let currentlyInfected;
  let impact;
  data.reportedCases = reportedCases;
  data.currentlyInfected = currentlyInfected;
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
