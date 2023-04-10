function changeGrid(){
    let width = prompt("Insert width of new grid (e.g.: 10)");
    let height = prompt("Insert height of the new grid (e.g.: 10)");
}

const container = document.querySelector("#container");
container.style.cssText =  "display: grid; width: 90%; height:90%;";
for (let i = 0; i < 16; i++){
    const row = document.createElement('div')
    row.classList.add('row');
    row.style.cssText = "display: flex; flex: 1";
    container.appendChild(row);
    for (let y = 0; y < 16; y++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = "border: 1px solid black; width: 100%; height: 100%";
        row.appendChild(box);
    }
}


const box = document.querySelectorAll(".box");
box.forEach(box => {
    box.addEventListener('mousemove', () => {
        box.style.backgroundColor="red";
    });
});
