console.log("yo");
$(document).ready(function(){
  let projects = [
    project1 = {
      "name": "friendsWebsite",
      "image": "https://www.pinterest.com/pin/149815125083797434/",
      "link": "http://craftcolorist.com/"
    },
    project2 = {
      "name": "friendsWebsite",
      "image": "https://www.pinterest.com/pin/149815125083797434/",
      "link": "http://craftcolorist.com/"
    }
  ];
  // console.log("yo");
  for(let i =0; i < projects.length; i ++){
    for(let k in projects[i]){
      $("ol").append(`<li>${projects[i][k]}</li>`);
    }
  }
});
