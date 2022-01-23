const relations = [
    "Wife",
    "Son ",
    "Daughter",
    "Brother",
    "Sister ",
    "Son in Law",
    "Daughter in Law",
    "Mother ",
    "Father",
    "Mother in Law",
    "Father in Law",
    "Nephew ",
    "Niece",
    "Neighbor",
];

const problems = [
    "car trouble",
    "a car wreck",
    "a fender bender",
    "a doctors appointment",
    "a dentist appointment",
    "a power outage",
    "some medical test results",
    "to wait at the DMV",
    "a prescription pickup",
    "received some bad news",
    "a sick pet",
    "a camping trip planned",
    "a broken water pipe",
    "tickets to the circus",
    "concert tickets",
    "a funeral to attend",
    "a landscaper coming over",
    "a plumber coming over",
    "a cable guy coming over",
    "an exterminator coming over",
    "an interview with the FBI",
    "a severe migraine",
    "a fish hook snagged in a finger",
    "a flight to catch",
    "a twisted ankle",
    "a twisted wrist"
];

const _ = require('lodash');

document.getElementById("text").innerHTML = `My ${_.sample(relations)} has ${_.sample(problems)} and needs my help. It should take me at least ${_.random(30, 90)} minutes.`;