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