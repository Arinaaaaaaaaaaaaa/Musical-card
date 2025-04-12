let music = document.getElementById("music");

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    wolf.size = '80px';
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const draggedElement = document.getElementById(data);
    
    if (data === "wolf") {
        const card = document.getElementById("card");
        card.appendChild(draggedElement);
        music.play();
    }
}

function stop(event) {
    event.preventDefault();
    music.pause();
}
