const covid19ImpactEstimator = (data) => {
  const input = data;
  let impact;
  let severeImpact;

  const currentlyInfected = input.reportedCases * 10;
  impact.currentlyInfected = currentlyInfected;
  const severeCurrentlyInfected = input.reportedCases * 50;
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  const infectionsByRequestedTime = impact.currentlyInfected * 512;
  impact.infectionsByRequestedTime = infectionsByRequestedTime;

  const severeInfectionsByRequestedTime = severeImpact.currentlyInfected * 512;
  severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;

  function normaliseDays(){
    let days = 1024 ;
    
    
    if(input.periodType === days){
        days = currentlyInfected * days;
        impact.infectionsByRequestedTime = days;
        //severeImpact.infectionsByRequestedTime = days;
    
    };

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
