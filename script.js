let container = document.getElementById( "container" );
const tablesize = 608;

function createGrid(){
  let inputgrid = 101;
  do{
      inputgrid = prompt( "enter the grid" );
      if (inputgrid > 100)
      alert("too high!!!\ntry again...");
  }while(inputgrid > 100);
  let sqrsize = tablesize / inputgrid;
  let arrsqrdiv = [];
  container.innerHTML = "";

  for (let i = 0; i < inputgrid * inputgrid ; i++)
  {
    arrsqrdiv[i] = document.createElement( "div" );
    arrsqrdiv[i].setAttribute( "class", "sqrdiv" );
    arrsqrdiv[i].setAttribute( "style", `width: ${sqrsize}px; height: ${sqrsize}px; background-color: black` );
    container.appendChild( arrsqrdiv[i] );
  }
}

let popUpbutton = document.querySelector( "#popUpBtn" );
popUpbutton.addEventListener( "click", createGrid );


container.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("sqrdiv")) {
    // you can not use e.target.setAttribute("style", ...) becouse it destroys previouse styles
    e.target.style.backgroundColor = "blue";
  }
});

container.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("sqrdiv")) {
    e.target.style.backgroundColor = "black";
  }
});