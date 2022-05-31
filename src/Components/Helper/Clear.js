export const clearVisited = (rows, columns) => {

    for (var i=0; i<rows; i++){
        for (var j=0; j<columns; j++){
            document.getElementById(`node-${i}-${j}`).classList.remove("visited-node");
            document.getElementById(`node-${i}-${j}`).classList.remove("path-node");
        }
    }
}

export const clearBoard = (rows, columns) => {
    for (var i=0; i<rows; i+=1){
        for (var j=0; j<columns; j+=1){
            let node = document.getElementById(`node-${i}-${j}`);
            if (node === null) continue;
            node.classList.remove("visited-node");
            node.classList.remove("wall-node");
            node.classList.remove("found-node");
            node.classList.remove("path-node");
            node.setAttribute("distance", Infinity);
            node.setAttribute("route", []);

        }
    }
}