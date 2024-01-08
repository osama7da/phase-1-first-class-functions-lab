// Code your solution in this file!
function returnFirstTwoDrivers (drivers){
    
return drivers.slice(0,2)
}

function returnLastTwoDrivers (drivers){
    
    return drivers.slice(-2)
    }

   let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers] 

function createFareMultiplier (fare){
    
    return fareMultiplier => fare * fare; 

}

function fareDoubler(fare) {
    return fare * 2;
  }

  function fareTripler (fare){
    return fare*3;
  }

  const selectDifferentDrivers = (drivers, sou) => {
    return sou(drivers);
  };
