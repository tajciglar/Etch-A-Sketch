function changeGrid(){
    
    let grid = prompt("Insert a number for the  new grid (e.g.: 10 = 10x10, max is 100)");

    while(isNaN(grid)) {
        grid = prompt("Please enter an number");
    }
    while (grid >= 100){
        grid = prompt("Please enter an number that is less than 100");
    }

    const container = document.querySelector("#container");
    const row = document.querySelectorAll(".row");
    row.forEach(row =>{
        row.remove()
        });

    container.style.cssText =  "display: grid; width: 80%; height:80%;";
    for (let i = 0; i < grid; i++){
        const row = document.createElement('div')
        row.classList.add('row');
        row.style.cssText = "display: flex; flex: 1";
        container.appendChild(row);
        for (let y = 0; y < grid; y++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.cssText = "border: 1px solid black; width: 100%; height: 100%";
            row.appendChild(box);
        }
    }

    addHover();
}

function addHover () {
    const box = document.querySelectorAll(".box");
    box.forEach(box => {
        box.addEventListener('mousemove', () => {
            box.style.backgroundColor="red";
        });
    });
}

function clearColor(){
    const box = document.querySelectorAll(".box");
    box.forEach(box => { 
            box.style.backgroundColor="white";
        });
}



