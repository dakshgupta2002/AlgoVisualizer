export const Attribute = (id, require) => {
    var ans = "node-"; var i = 5; var row = 0; var col = 0;

    while (id[i] !== "-") { row = row * 10 + parseInt(id[i]); i++; }
    i++;
    while (i < id.length) { col = col * 10 + parseInt(id[i]); i++; }

    if (require === "row") return row;
    else if (require === "col") return col;
    else if (require === "r") return ans + String(row) + "-" + String(col + 1);
    else if (require === "l") return ans + String(row) + "-" + String(col - 1);
    else if (require === "d") return ans + String(row + 1) + "-" + String(col);
    else if (require === "u") return ans + String(row - 1) + "-" + String(col);
    else return id;
};

export const canVisit = (id) => {
    if (document.getElementById(id) === null ||
        document.getElementById(id).classList.contains('visited-node') ||
        document.getElementById(id).classList.contains('wall-node')) {
        return false;
    } else {
        return true;
    }
}

export const addShortestPath = (shortestPath, index, taskSpeed) => {
    if (index === shortestPath.length) return;

    document.getElementById(shortestPath[index]).classList.add('path-node');
    
    setTimeout(() => {
        addShortestPath(shortestPath, index + 1, taskSpeed);
    }, taskSpeed)

}