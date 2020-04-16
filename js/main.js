var scenarioArray = [
    'What to Watch When You’re Stuck at Home',
    'in the past. Dinosaurs have come back. They rule the land, sky, sea, and air. Being outside is incredibly dangerous as humans are no longer at the top of the food chain.',
    'time traveling. Time rewinds 100 years each consecutive week, and humanity is thrust backward into the past.',
    'rainy and dark. There is no sun.',
    'an arid desert without water.',
    'a flooded planet with no land.',
    'a nuclear winter that is cold and frozen.',
    'a frozen desert without foliage or organic food.',
];

var controlArray = [
    'insects that infect you with a virus that takes away your memory.',
    'microtransactions for every part of life that you can never get ahead of. To keep up you have to always work with no time off.',
    'a ruling class that has banned all books and made reading illegal.',
    'by a religious cult. Human relationships are illegal and all reproduction happens in the lab.',
    'destruction of roadways.',
    'the end of the monetary system.',
    'being considered an outcast and hunted by the overlords.',
    'what appears to be the wipeout of mankind.',
    'consistent weather disasters. Your region specifically is plauged by constant tornadoes that are unpredictable.',
];

var taskArray = [
    'a way to keep track of your daily life.',
    'a sytem that helps you save or generate more money.',
    'a secret library.',
    'a secret dating service that helps you find your true mate amidst the chaos.',
    'a mode of transportation.',
    'a way to exchange goods and services with others.',
    'a shelter that can be concealed and easily transported.',
    'a way to find others you can form an alliance with.',
    'a way to find others you can form an alliance with.',
];


window.onload = function() {


  var randomArrayNumber = Math.floor(Math.random() * controlArray.length);
  console.log(randomArrayNumber)


    document.getElementById('scenarioScript').innerHTML = scenarioArray[randomArrayNumber];
    document.getElementById('controlScript').innerHTML = controlArray[randomArrayNumber];
    document.getElementById('taskScript').innerHTML = taskArray[randomArrayNumber];

    randombg()
}




