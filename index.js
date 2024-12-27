// code your solution here

//Start of saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
//End of saturdayFun function

//Start of mondayWork function
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
//End of mondayWork function

//Start of wrapper function
function wrapAdjective(wrapper) {
  return function(adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  };
}
//End of wrapper function