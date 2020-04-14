const covid19ImpactEstimator = (data) => {
  const input = data;
  let impact;
  let severeImpact;

  const currentlyInfected = input.reportedCases * 10;
  impact.currentlyInfected = currentlyInfected;
  const severeCurrentlyInfected = input.reportedCases * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;
  
  let estimatedDays;
  estimatedDays = input.periodType;
  estimatedDays = impact.currentlyInfected * 1024;
  impact.currentlyInfected = estimatedDays;

  let estimatedWeeks;
  estimatedWeeks = input.periodType;
  estimatedWeeks = impact.currentlyInfected * 146;
  impact.currentlyInfected = estimatedWeeks;

  let estimatedMonths;
  estimatedMonths = input.periodType;
  estimatedMonths = impact.currentlyInfected * 34;
  impact.currentlyInfected = estimatedMonths;
  
  let estimatedDays;
  estimatedDays = input.periodType;
  estimatedDays = severeImpact.currentlyInfected * 1024;
  severeImpact.currentlyInfected = estimatedDays;

  let estimatedWeeks;
  estimatedWeeks = input.periodType;
  estimatedWeeks = severeImpact.currentlyInfected * 146;
  severeImpact.currentlyInfected = estimatedWeeks;

  let estimatedMonths;
  estimatedMonths = input.periodType;
  estimatedMonths = severeImpact.currentlyInfected * 34;
  severeImpact.currentlyInfected = estimatedMonths;

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
