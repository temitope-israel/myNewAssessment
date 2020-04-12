const covid19ImpactEstimator = (data) => {
  let impact;
  let severeImpact;
  // INPUT DATA
  data = {
    reportedCases: ''
  };
  
  // OUTPUT DATA

   
   impact= {
      currentlyInfected: '',
      infectionsByRequestedTime: ''
   },
   severeImpact= {
      currentlyInfected: '',
      infectionsByRequestedTime: ''
   }




// CHALLENGE ONE
let currentlyInfected = reportedCases * 10;
myOutput.impact.currentlyInfected = currentlyInfected;


let severeCurrentlyInfected = data.reportedCases * 50;
myOutput.severeImpact.currentlyInfected = severeCurrentlyInfected;

let infectionsByRequestedTime = myOutput.impact.currentlyInfected * 512;
myOutput.impact.infectionsByRequestedTime = infectionsByRequestedTime;

let severeInfectionsByRequestedTime = myOutput.severeImpact.currentlyInfected * 512;
myOutput.severeImpact.infectionsByRequestedTime = severeInfectionsByRequestedTime;










}

export default covid19ImpactEstimator;


