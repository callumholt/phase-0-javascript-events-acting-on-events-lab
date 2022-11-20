// const dodger = document.getElementById("dodger");

// function moveDodgerleft() {
//     const leftNumbers = dodger.style.left.replace("px","");
//     const left = parseInt(leftNumbers, 10);

//     If(left>0) {
//         dodger.style.left = `${left - 10}px`;
//     }
    
// }

// document.addEventListener("Keydown", function (e) {
//     if (e.key === "ArrowLeft") {
//         moveDodgerLeft();
//     }
// });

//

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });  

  function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if (right > 0 && right < 360) {
        dodger.style.left = `${right+10}px`;
        console.log(right);
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
