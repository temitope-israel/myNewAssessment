const covid19ImpactEstimator = (data) => {
  const input = data;
  let impact;
  let severeImpact;
  let infectionsByRequestedTime;
  let currentlyInfected;
  let severeCurrentlyInfected;
  let periodType;

  currentlyInfected = input.reportedCases * 10;
  impact.currentlyInfected = currentlyInfected;
  severeCurrentlyInfected = input.reportedCases * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;
  input.periodType = periodType;
  const days = 1024;
  let weeks;
  let months;
  if (periodType === weeks) {
    periodType = days / 7;
  } else if (periodType === months) {
    periodType = days / 30;
  } else periodType = days;

  infectionsByRequestedTime = impact.currentlyInfected * periodType;
  impact.infectionsByRequestedTime = infectionsByRequestedTime;
  infectionsByRequestedTime = severeImpact.currentlyInfected * periodType;
  severeImpact.infectionsByRequestedTime = infectionsByRequestedTime;

  return {
    impact: {
      currentlyInfected,
      infectionsByRequestedTime
    },

    severeImpact: {
      currentlyInfected,
      infectionsByRequestedTime
    }
  };
};

export default covid19ImpactEstimator;
