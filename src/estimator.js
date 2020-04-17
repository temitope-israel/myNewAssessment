let reportedCases;
let currentlyInfected;
let severeCurrentlyInfected;
let infectionsByRequestedTime;
let severeInfectionsByRequestedTime;
let periodType;
let impact;
let severeImpact;
inputData = {
    reportedCases,
},
impact = {
    
},

severeImpact = {

}
const covid19ImpactEstimator = (data) => {
    data = inputData.reportedCases;
    currentlyInfected = data * 10;
    impact.currentlyInfected = currentlyInfected;
    severeCurrentlyInfected = data * 50;
    severeImpact.currentlyInfected = severeCurrentlyInfected;

    infectionsByRequestedTime = impact.currentlyInfected * 1024;
    severeInfectionsByRequestedTime = severeImpact.currentlyInfected * 1024;
    
    function getPeriodType (days){
        let typeOfPeriod = prompt("Please enter day");
        
        days = 1024;
            let weeks = 7;
            let months = 30;
        if(typeOfPeriod === "days") {
                infectionsByRequestedTime = currentlyInfected * Math.trunc(days);
                impact.infectionsByRequestedTime = infectionsByRequestedTime;
                severeInfectionsByRequestedTime = severeCurrentlyInfected * Math.trunc(days);
                severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
        }
        if(typeOfPeriod === "weeks") {
                   infectionsByRequestedTime = currentlyInfected * Math.trunc((days / weeks) * inputData.periodType);
                impact.infectionsByRequestedTime = infectionsByRequestedTime;
                severeInfectionsByRequestedTime = severeCurrentlyInfected * Math.trunc((days / weeks) * inputData.periodType);         
                severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
                } else {
                infectionsByRequestedTime = currentlyInfected * Math.trunc((days / months) * inputData.periodType);
                impact.infectionsByRequestedTime = infectionsByRequestedTime;
                severeInfectionsByRequestedTime = severeCurrentlyInfected * Math.trunc((days / months) * inputData.periodType)
                severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;
                } 
                return {
                    days,
                    weeks,
                    months,
                    typeOfPeriod
                }
        }
        
    
    
    getPeriodType(periodType);

    return {
        data: {
            inputData
        },
        impact: {
                currentlyInfected,
                infectionsByRequestedTime
        },
        severeimpact: {
                severeCurrentlyInfected,
                severeInfectionsByRequestedTime
        }
    }
}

let periodType; let input; let impact; let severeImpact;
input = {
  reportedCases,
  currentlyInfected
  };

impact = {};
severeImpact = {};
const covid19ImpactEstimator = (data) => {
  data = input;
  currentlyInfected = Math.trunc(input.reportedCases * 10);
  impact.currentlyInfected = currentlyInfected;

  severeCurrentlyInfected = Math.trunc(input.reportedCases * 50);
  severeImpact.currentlyInfected = severeCurrentlyInfected;

  return {
    impact: {
      currentlyInfected,
      infectionsByRequestedTime
  },
    severeImpact: {
      severeCurrentlyInfected,
      severeInfectionsByRequestedTime
  }
};
};

function estimatePeriods(days) {
  days = 1024;
  let weeks;
  let months;

  if (periodType === months) {
      periodType = days / 30;
  } else if (periodType === weeks) {
      periodType = days / 7;
      infectionsByRequestedTime = Math.trunc(impact.currentlyInfected * periodType);
  impact.infectionsByRequestedTime = infectionsByRequestedTime;
  severeInfectionsByRequestedTime = Math.trunc(severeImpact.severeCurrentlyInfected * periodType);
  severeImpact.severeInfectionsByRequestedTime = severeInfectionsByRequestedTime;
} else {
  periodType = days;
}
}
estimatePeriods(periodType);
export default covid19ImpactEstimator;
