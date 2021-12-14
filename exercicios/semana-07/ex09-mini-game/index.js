const $progressBar = document.getElementById("progress-bar");
const $progress = document.getElementById("progress");
const $range = document.getElementById("range");
let i = 0;

function move() {
  if (i == 0) {
    i = 1;
    let width = 100;
    let tempo = setInterval(() => {
      if (width == 0) {
        i = 0;
        clearInterval(tempo);
        $range.style.display = "none";
        complete();
      } else {
        width--;
        $progress.style.width = width + "%";
        $progress.innerHTML = width + "%";
        if (width < 30) {
          $progress.style.backgroundColor = "brown";
        } else {
          $progress.style.backgroundColor = "green";
        }
      }
    }, 100);
  }
}

move();

function complete() {
  if ($progress.style.width == 0 + "%") {
    $progressBar.innerHTML = "Game Over";
  }
}


// $progressBar.addEventListener("click", () => {

// });


