var titleArray = [
    'What to Watch When You’re Stuck at Home',
    'Sea Otter Cam',
];
  var descriptionArray = [
    'Members of MoMA’s Department of Film and the Creative Team have you covered with these streaming suggestions.',
    'microtransactions for every part of life that you can never get ahead of. To keep up you have to always work with no time off.',
];

var linkOutArray = [
    'https://www.moma.org/magazine/articles/252?utm_medium=email&utm_campaign=MKT%20-%20MoMA%20From%20Home%20General%2020200323&utm_content=MKT%20-%20MoMA%20From%20Home%20General%2020200323+CID_bed739d12db43227a65347cc14e31b78&utm_source=campaignmonitor&utm_term=Watch',
    'https://www.montereybayaquarium.org/animals/live-cams/sea-otter-cam?mc_cid=c61f9c9b8c&mc_eid=73abe96aab',
];


window.onload = function() {


  var randomArrayNumber = Math.floor(Math.random() * titleArray.length);
  console.log(randomArrayNumber)


    document.getElementById('title').innerHTML = titleArray[randomArrayNumber];
    document.getElementById('description').innerHTML = descriptionArray[randomArrayNumber];
    document.getElementById('linkOut').innerHTML = linkOutArray[randomArrayNumber];

    randombg()
}




