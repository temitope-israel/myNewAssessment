const myOwnFunction = (data) => {
    let reportedCases;
    let currentlyInfected = 10;
  
    
    //impact.currentlyInfected = reportedCases;
    //currentlyInfected = currentlyInfected * reportedCases;
  //let impact;
  //data.reportedCases = reportedCases;
  

  data = {
      reportedCases,
      currentlyInfected
  }

  impact = {

  }

  severeImpact = {

  }
  reportedCases = data.currentlyInfected * 10;
  console.log(reportedCases);
  impact.currentlyInfected = reportedCases;
  severeImpact.currentlyInfected = reportedCases;
  

  return {
    data: {
      reportedCases,
      currentlyInfected
    },
    impact: {
        reportedCases,
      currentlyInfected
    },
    severeImpact: {
       currentlyInfected
    }
  };
  
  
}
