export const clearVisited = (rows, columns) => {

    for (var i=0; i<rows; i++){
        for (var j=0; j<columns; j++){
            document.getElementById(`node-${i}-${j}`).classList.remove("visited-node");
        }
    }
}

export const clearBoard = (rows, columns) => {
    for (var i=0; i<rows; i++){
        for (var j=0; j<columns; j++){
            document.getElementById(`node-${i}-${j}`).classList.remove("visited-node");
            document.getElementById(`node-${i}-${j}`).classList.remove("wall-node");
            document.getElementById(`node-${i}-${j}`).classList.remove("found-node");
        }
    }
}