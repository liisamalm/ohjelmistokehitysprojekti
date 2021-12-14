/* Side navigation */

var mini = true;
function toggleSidebar() {
  if (mini) {
    //console.log("opening sidebar");
    document.getElementById("mySidebar").style.width = "255px";
    document.getElementById("main").style.marginLeft = "255px";
    this.mini = false;
  } else {
    //console.log("closing sidebar");
    document.getElementById("mySidebar").style.width = "75px";
    document.getElementById("main").style.marginLeft = "75px";
    this.mini = true;
  }
}

