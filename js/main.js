function resumeJump() {
    var resumeDisplay = document.getElementById("resume");
    if (resumeDisplay.style.display != "block") {
      $(document).ready(function(){
          $('.projectView').hover(function() {
            $(this).addClass('transition');
          }, function () {
            $(this).removeClass('transition');
          });
     });
  }
}

resumeJump();

function showProjects(objName) {
    var projectDisplay = document.getElementById(objName);
    
    var projectsArr = new Array();    
    
    projectsArr[0] = "project0";
    projectsArr[1] = "project1";
    projectsArr[2] = "project2";
    projectsArr[3] = "project3";
    projectsArr[4] = "project4";
    projectsArr[5] = "project5";
    // Add resume into array;
    projectsArr[6] = "resume";
    

    
    var tempProject;    
    
    for (var i = 0; i< projectsArr.length; i++){
      if (objName == projectsArr[i]) {
        projectDisplay.style.display = "block";
      }
      else {
        tempProject = document.getElementById(projectsArr[i]);
        tempProject.style.display = "none";
      }
    }
    return 

};

function showProjectDetails(objName) {
    var projectDisplay = document.getElementById(objName);
    
    var projectsArr = new Array();    
    
    projectsArr[0] = "project0-details";
    projectsArr[1] = "project1-details";
    projectsArr[2] = "project2-details";
    projectsArr[3] = "project3-details";
    projectsArr[4] = "project4-details";
    projectsArr[5] = "project5-details";
    

    
    var tempProject;    
    
    for (var i = 0; i< projectsArr.length; i++){
      if (objName == projectsArr[i]) {
        projectDisplay.style.display = "block";
      }
      else {
        tempProject = document.getElementById(projectsArr[i]);
        tempProject.style.display = "none";
      }
    }
    return 

};


function showProjectsSmall(objName) {
    var projectDisplay = document.getElementById(objName);
    
    var projectsArr = new Array();    
    
    projectsArr[0] = "project0-small";
    projectsArr[1] = "project1-small";
    projectsArr[2] = "project2-small";
    projectsArr[3] = "project3-small";
    projectsArr[4] = "project4-small";
    projectsArr[5] = "project5-small";
    // Add resume into array;
    projectsArr[6] = "resume-small";
    

    
    var tempProject;    
    
    for (var i = 0; i< projectsArr.length; i++){
      if (objName == projectsArr[i]) {
        projectDisplay.style.display = "block";
      }
      else {
        tempProject = document.getElementById(projectsArr[i]);
        tempProject.style.display = "none";
      }
    }
    return 

};


function showProjectDetailsSmall(objName) {
    var projectDisplay = document.getElementById(objName);
    
    var projectsArr = new Array();    
    
    projectsArr[0] = "project0-details-small";
    projectsArr[1] = "project1-details-small";
    projectsArr[2] = "project2-details-small";
    projectsArr[3] = "project3-details-small";
    projectsArr[4] = "project4-details-small";
    projectsArr[5] = "project5-details-small";
    

    
    var tempProject;    
    
    for (var i = 0; i< projectsArr.length; i++){
      if (objName == projectsArr[i]) {
        projectDisplay.style.display = "block";
      }
      else {
        tempProject = document.getElementById(projectsArr[i]);
        tempProject.style.display = "none";
      }
    }
    return 

};

function showProjectsMobile(objName) {
    var projectDisplay = document.getElementById(objName);
    
    var projectsArr = new Array();    
    
    projectsArr[0] = "project0-mobile";
    projectsArr[1] = "project1-mobile";
    projectsArr[2] = "project2-mobile";
    projectsArr[3] = "project3-mobile";
    projectsArr[4] = "project4-mobile";
    projectsArr[5] = "project5-mobile";
    // Add resume into array;
    //projectsArr[6] = "resume-mobile";
    

    
    var tempProject;    
    
    for (var i = 0; i< projectsArr.length; i++){
      if (objName == projectsArr[i]) {
        projectDisplay.style.display = "block";
      }
      else {
        tempProject = document.getElementById(projectsArr[i]);
        tempProject.style.display = "none";
      }
    }
    return 

};

function showProjectDetailsMobile(objName) {
    var projectDisplay = document.getElementById(objName);
    
    var projectsArr = new Array();    
    
    projectsArr[0] = "project0-details-mobile";
    projectsArr[1] = "project1-details-mobile";
    projectsArr[2] = "project2-details-mobile";
    projectsArr[3] = "project3-details-mobile";
    projectsArr[4] = "project4-details-mobile";
    projectsArr[5] = "project5-details-mobile";
    
    var tempProject;    
    
    for (var i = 0; i< projectsArr.length; i++){
      if (objName == projectsArr[i]) {
        projectDisplay.style.display = "block";
      }
      else {
        tempProject = document.getElementById(projectsArr[i]);
        tempProject.style.display = "none";
      }
    }
    return 
};

