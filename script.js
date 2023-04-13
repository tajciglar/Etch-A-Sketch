function changeGrid(){
    
    let grid = prompt("Insert a number for the  new grid (e.g.: 10 = 10x10, max is 100)");

    // check if a grid is an number and if its lower than 100
    while(isNaN(grid)) {
        grid = prompt("Please enter an number");
    }
    while (grid >= 100){
        grid = prompt("Please enter an number that is less than 100");
    }


    // removes previos grid
    const container = document.querySelector("#container");
    const row = document.querySelectorAll(".row");
    row.forEach(row =>{
        row.remove()
        });
    
    // creates a grid
    container.style.cssText =  "display: grid;";
    for (let i = 0; i < grid; i++){
        const row = document.createElement('div')
        row.classList.add('row');
        row.style.cssText = "display: flex; flex: 1";
        container.appendChild(row);
        for (let y = 0; y < grid; y++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.cssText = "border: 1px solid black; width: 100%; height: 100%; background-color: white";
            row.appendChild(box);
        }
    }
    // calls function for hover
    addHover();

}

function addHover () {
    const box = document.querySelectorAll(".box");
    const coloredBoxes = {};
    const colorPicker = document.getElementById("color-picker");
    let selectedColor = colorPicker.value;
    let mouseDown = false;

    colorPicker.addEventListener("input", (event) =>{
        selectedColor = event.target.value;
    });

    // checking if mouse is clicked or not
    document.addEventListener("mousedown", () =>{
        mouseDown = true;
    });
    document.addEventListener("mouseup", () =>{
        mouseDown = false;
    });

    box.forEach((box, index) => {
        // color based on the selector
        box.addEventListener('mouseenter', () => {
            if(mouseDown){
                if (coloredBoxes[index]) {
                    // Generate a random RGB color
                    const red = Math.floor(Math.random() * 256);
                    const green = Math.floor(Math.random() * 256);
                    const blue = Math.floor(Math.random() * 256);
                    const color = `rgb(${red}, ${green}, ${blue})`;
            
                    // Set the box color to the random color
                    box.style.backgroundColor = color;
                } else {
                    // Set the box color to the color that the user picked
                    box.style.backgroundColor = selectedColor;
                    coloredBoxes[index] = true;
                }
            }
        });               
    });
}

// clears color from the grid
function clearColor(){
    const box = document.querySelectorAll(".box");

    box.forEach(box => { 
        box.style.backgroundColor="white";
    });
}

//creates a grid
const DEFAULT = 64;
const container = document.querySelector("#container");
container.style.cssText =  "display: grid; ";
    for (let i = 0; i < DEFAULT; i++){
        const row = document.createElement('div')
        row.classList.add('row');
        row.style.cssText = "display: flex; flex: 1";
        container.appendChild(row);
        for (let y = 0; y < DEFAULT; y++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.cssText = "border: 1px solid black; width: 100%; height: 100%; background-color: white";
            row.appendChild(box);
        }
    }
    //calls a function
    addHover();

