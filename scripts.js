


function init () {

const takeoffButton = document.getElementById("takeoff");
const landButton = document.getElementById("landing");
const paragraph = document.getElementById("flightStatus");
const shuttleBG = document.getElementById("shuttleBackground");
const height = document.getElementById("spaceShuttleHeight");
const abortButton = document.getElementById("missionAbort");

  function takeoffConfirm () {
        let confirmation = confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation === true) {
          paragraph.innerHTML = "Shuttle in flight.";
          shuttleBG.style.background = "blue";
          height.innerText = "10,000";

        }
      }
      takeoffButton.addEventListener("click", takeoffConfirm);

  function landConfirm () {
    alert("The shuttle is landing. Landing gear engaged.");
    paragraph.innerHTML = "The shuttle has landed.";
    shuttleBG.style.background = "green";
    height.innerText = "0";

  }

      landing.addEventListener("click", landConfirm);

      function abortConfirm () {
        let confirmation = confirm("Confirm that you want to abort the mission.");
        if (confirmation === true) {
          paragraph.innerHTML = "Mission aborted.";
          shuttleBG.style.background = "green";
          height.innerText = "0";

        }
      }
      abortButton.addEventListener("click", abortConfirm);

  


}

window.addEventListener("load", init);

// Write your JavaScript code here.
// Remember to pay attention to page loading!