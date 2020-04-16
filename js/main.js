var scenarioArray = [
    'What to Watch When You’re Stuck at Home',
    'in the past. Dinosaurs have come back. They rule the land, sky, sea, and air. Being outside is incredibly dangerous as humans are no longer at the top of the food chain.',
];
  var controlArray = [
    'Members of MoMA’s Department of Film and the Creative Team have you covered with these streaming suggestions.',
    'microtransactions for every part of life that you can never get ahead of. To keep up you have to always work with no time off.',
];

var taskArray = [
    'https://www.moma.org/magazine/articles/252?utm_medium=email&utm_campaign=MKT%20-%20MoMA%20From%20Home%20General%2020200323&utm_content=MKT%20-%20MoMA%20From%20Home%20General%2020200323+CID_bed739d12db43227a65347cc14e31b78&utm_source=campaignmonitor&utm_term=Watch',
    'a sytem that helps you save or generate more money.',
];


window.onload = function() {


  var randomArrayNumber = Math.floor(Math.random() * controlArray.length);
  console.log(randomArrayNumber)


    document.getElementById('scenarioScript').innerHTML = scenarioArray[randomArrayNumber];
    document.getElementById('controlScript').innerHTML = controlArray[randomArrayNumber];
    document.getElementById('taskScript').innerHTML = taskArray[randomArrayNumber];

    randombg()
}




