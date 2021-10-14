function saturdayFun (activity = "roller-skate") {
    return(`This Saturday, I want to ${activity}!`)
}

function mondayWork (activity = 'go to the office') {
    return(`This Monday, I will ${activity}.`)
}

function wrapAdjective (work = "*") {
    return function innerFunction(adj = "special") {
        return (`You are ${work}${adj}${work}!`)
        // return (`You are ${hl} ${adj} ${hl}!`) 
    }
wrapAdjective();
}
   