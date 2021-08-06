


function init () {

const takeoffButton = document.getElementById("takeoff");
const paragraph = document.getElementById("flightStatus");
const shuttleBG = document.getElementById("shuttleBackground");
const height = document.getElementById("spaceShuttleHeight");

  function takeoffConfirm () {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation === true) {
          paragraph.innerHTML = "Shuttle in flight.";
          shuttleBG.style.background = "blue";
          height.innerText = "10,000";

        }
      }
      takeoffButton.addEventListener("click", takeoffConfirm);


}

window.addEventListener("load", init);

// Write your JavaScript code here.
// Remember to pay attention to page loading!