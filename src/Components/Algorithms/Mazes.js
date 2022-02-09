export const mazeBuilder = (maze, start, end, rows, columns) => {
    if (maze==="Ladder") {
        return ladderMaze(start, end, rows, columns);
    } else if (maze==="Trapped") {
        return Trapped(start, end, rows, columns);
    } else if (maze==="Runner") {
        return Runner(start, end, rows, columns);
    }
}

const ladderMaze = (start, end, rows, columns) => {
    window.alert(document.getElementById("start"));
}

const Trapped = (start, end, rows, columns) => {
}

const Runner = (start, end, rows, columns) => {
}