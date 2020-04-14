const covid19ImpactEstimator = (data) => {
    data;


let currentlyInfected, 
severeCurrentlyInfected,
infectionsByRequestedTime,
severeInfectionsByRequestedTime;

currentlyInfected = reportedCases(data) * 10;
impact.currentlyInfected = currentlyInfected;
severeCurrentlyInfected = reportedCases(data) * 50;
severeImpact.currentlyInfected = severeCurrentlyInfected;

infectionsByRequestedTime = impact.currentlyInfected * 512;
impact.infectionsByRequestedTime = infectionsByRequestedTime;

severeInfectionsByRequestedTime = severe.currentlyInfected * 512;
severe.infectionsByRequestedTime = severeInfectionsByRequestedTime;
return{
    impact: {
        currentlyInfected,
        infectionsByRequestedTime
    },

    severeImpact: {
        currentlyInfected,
        infectionsByRequestedTime
    }
}
}
export default covid19ImpactEstimator;
