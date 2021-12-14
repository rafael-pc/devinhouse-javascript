const $progress = document.getElementById("progress");
let i = 0;

function move() {
  if (i == 0) {
    i = 1;
    let width = 0;
    let tempo = setInterval(() => {
      if (width >= 100) {
        clearInterval(tempo);
        i = 0;
      } else {
        width++;
        $progress.style.width = width + "%";
        $progress.innerHTML = width + "%";
        if (width < 30) {
          $progress.style.backgroundColor = "brown";
        } else {
          $progress.style.backgroundColor = "green";
        }
        complete();
      }
    }, 100);
  }
}

move();

function complete() {
  if ($progress.style.width == 100 + "%") {
    $progress.innerHTML = "Concluido";
  }
}


