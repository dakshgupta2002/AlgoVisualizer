import { clearBoard } from "../Helper/Clear"

const bordersRow = (i, rows, columns) => {
    if (i < columns) {
        setTimeout(() => {
            document.getElementById(`node-${0}-${i}`).classList.add("wall-node")
            document.getElementById(`node-${rows - 1}-${i}`).classList.add("wall-node")
            bordersRow(i + 1, rows, columns)
        }, 100)
    }
}
const bordersCol = (i, rows, columns) => {
    if (i < rows) {
        setTimeout(() => {
            document.getElementById(`node-${i}-${columns - 1}`).classList.add("wall-node")
            document.getElementById(`node-${i}-${0}`).classList.add("wall-node")
            bordersCol(i + 1, rows, columns)
        }, 200)
    }
}

export const mazeBuilder = (maze, start, end, rows, columns, setStart, setEnd, setIsWorking) => {
    setIsWorking(true);
    clearBoard(rows, columns);
    setTimeout(() => {
        if (maze === "Ladder") {
            setStart(`node-${rows - 1}-${0}`); setEnd(`node-${0}-${columns - 1}`);
            for (var i = 2; i < columns; i += 4) {
                ladderMaze(2, i, rows, columns, start, end);
            }

            setTimeout(() => {
                setIsWorking(false);
            }, rows*100);
        } else if (maze === "Trapped") {
            return Trapped(0, 0, rows, columns, start, end);
        } else if (maze === "Runner") {
            setTimeout(() => {
                bordersRow(0, rows, columns);
                bordersCol(0, rows, columns);
            }, 100);
            return Runner(0, 0, rows, columns, start, end);
        }
    }, 200);
}

const ladderMaze = (x, y, rows, columns, start, end) => {
    setTimeout(() => {
        if (x < rows && y < columns) {
            setTimeout(() => {
                document.getElementById(`node-${x - 1}-${y - 1}`).classList.add('wall-node');
                setTimeout(() => {
                    document.getElementById(`node-${x - 1}-${y}`).classList.add('wall-node');
                    setTimeout(() => {
                        document.getElementById(`node-${x}-${y}`).classList.add("wall-node")
                    }, 100)
                }, 100)
            }, 100)
            ladderMaze(x + 2, y + 1, rows, columns, start, end);
        }

    }, 300)


}

const Trapped = (x, y, rows, columns, start, end) => {
}

const Runner = (x, y, rows, columns, start, end) => {

}