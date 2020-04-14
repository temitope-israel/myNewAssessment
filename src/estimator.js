const covid19ImpactEstimator = (data) => {
  const input = data;
  let impact;
  let severeImpact;
  let infectionsByRequestedTime;

  const currentlyInfected = input.reportedCases * 10;
  impact.currentlyInfected = currentlyInfected;
  const severeCurrentlyInfected = input.reportedCases * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;
  let estimatedDays;
  estimatedDays = input.periodType;
  estimatedDays = impact.currentlyInfected * 1024;
  impact.infectionsByRequestedTime = estimatedDays;

  let estimatedWeeks;
  estimatedWeeks = input.periodType;
  estimatedWeeks = impact.currentlyInfected * 146;
  impact.infectionsByRequestedTime = estimatedWeeks;

  let estimatedMonths;
  estimatedMonths = input.periodType;
  estimatedMonths = impact.currentlyInfected * 34;
  impact.infectionsByRequestedTime = estimatedMonths;

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
