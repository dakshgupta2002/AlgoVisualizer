import { PlayArrowRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { toastOptions } from "../Graph/header/Actions";
import { Attribute, canVisit, addShortestPath } from "../Helper/Attribute";
import { clearVisited } from "../Helper/Clear";


export default function DijkstraVisualizer(props) {
    var s1 = []
    var shortestPath = [];

    const dijkstra = () => {
        clearVisited(props.rows, props.columns);
        s1.splice(0, s1.length);
        shortestPath.splice(0, shortestPath.length);
        props.setIsWorking(true);

        s1.push(props.start);
        props.start.setAttribute("distance", 0);

        return visitNext();
    }

    const visitNext = () => {

    }

    return <Button color="success" variant="contained" onClick={dijkstra} disabled={props.isWorking}>
        <PlayArrowRounded /> Visualize Dijkstra
    </Button>
}