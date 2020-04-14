const covid19ImpactEstimator = (data) => {
  const input = data;
  let impact;
  let severeImpact;

  const currentlyInfected = input.reportedCases * 10;
  impact.currentlyInfected = currentlyInfected;
  const severeCurrentlyInfected = input.reportedCases * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;
  //
  function normaliseDays() {
    let days = 1024;
    let weeks = 146;
    let months = 34;
  //
    if (input.periodType === days) {
      days *= impact.currentlyInfected;
      impact.infectionsByRequestedTime = days;

      days *= severeImpact.currentlyInfected;
      severeImpact.infectionsByRequestedTime = days;
    } else if (input.periodType === weeks) {
      weeks *= impact.currentlyInfected;
      impact.infectionsByRequestedTime = weeks;

      days *= severeImpact.currentlyInfected;
      severeImpact.infectionsByRequestedTime = weeks;
    } else if (input.periodType === months) {
      months *= impact.currentlyInfected;
      impact.infectionsByRequestedTime = months;

      months *= severeImpact.currentlyInfected;
      severeImpact.infectionsByRequestedTime = months;
    } else input.periodType = 0;
  }
  return {
    impact: {
      currentlyInfected,
      infectionsByRequestedTime: normaliseDays()
    },

    severeImpact: {
      currentlyInfected,
      infectionsByRequestedTime: normaliseDays()
    }
  };
};

export default covid19ImpactEstimator;
