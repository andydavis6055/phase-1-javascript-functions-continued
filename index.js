function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun("bathe my dog");

function mondayWork(work = "go to the office") {
    return (`This Monday, I will ${work}.`)
}
mondayWork("work from home ")

function wrapAdjective(string = "*") {
    return function(adjective = "a hard worker.") {
      return `You are ${string}${adjective}${string}!`
    };
  }