const takeoffButton = document.getElementById("takeoff");


function init () {


function takeoffConfirm () {
      let confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
      if (confirmation === true) {
        paragraph.innerHTML = "Shuttle in flight.";
      }
    }
    takeoffButton.addEventListener("click", takeoffConfirm());


}

window.addEventListener("load", init);// Write your JavaScript code here.
// Remember to pay attention to page loading!