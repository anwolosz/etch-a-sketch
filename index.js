document.getElementById("resize").addEventListener("click", () => {
    if (document.getElementById("size").value <= 100)
    {
        createNewCanvas(document.getElementById("size").value)
    }
})

function createNewCanvas(size) {
    document.getElementById("flex-grid").innerHTML = "";
    let content = ""
    for (let i = 0; i < size; i++) {
        content = '<div class="col">';
        for (let j = 0; j < size; j++) {
            content += `<div class="cell" id=${i * size + j}></div>`
        }


        content += "</div>"
        document.getElementById("flex-grid").innerHTML += content;

    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            document.getElementById(i * size + j).addEventListener("mouseover", () => document.getElementById(i * size + j).style = "background: black")
        }
    }
}
createNewCanvas(16);