const container = document.querySelector("#container");
container.style.cssText =  "display: grid; width: 100%; height:100%;";
for (let i = 0; i < 16; i++){
    const row = document.createElement('div')
    row.classList.add('row');
    row.style.cssText = "display: flex;";
    container.appendChild(row);
    for (let y = 0; y < 16; y++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = "border: 1px solid black; width: 100%; height: 100%";
        row.appendChild(box);
    }
}