function screen_resize() {
    var projectName = "project" + count.toString();
    var projectSmallName = "project" + count.toString() + "-small";
    var projectMobileName = "project" + count.toString() + "-mobile";

    var projectDetails = "project" + count.toString() + "-details";
    var projectDetailsSmall = "project" + count.toString() + "-details-small";
    var projectDetailsMobile = "project" + count.toString() + "-details-mobile";

    var w = parseInt(window.innerWidth);

    if (w > 981) {
      showProjects(projectName);
      showProjectDetails(projectDetails);
      console.log('large screen');
    }

    else if (701 < w < 980) {
      showProjectsSmall(projectSmallName);
      showProjectDetailsSmall(projectDetailsSmall);
      console.log('small screen');
    }

    if (w < 700) {
      showProjectsMobile(projectMobileName);
      showProjectDetailsMobile(projectDetailsMobile);
      console.log('mobile');
    }
    console.log('Page size ' + w);
    return
}

$(document).ready(function (e) {
  screen_resize();
});

$(window).resize(function(e) {
  screen_resize();
});


