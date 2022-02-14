import { PlayArrowRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { toastOptions } from "../Graph/header/Actions";
import { Attribute, canVisit, addShortestPath } from "../Helper/Attribute";
import { clearVisited } from "../Helper/Clear";

export default function DfsVisualizer(props) {
    var s1 = []
    var shortestPath = [];

    const dfs = () => {
        clearVisited(props.rows, props.columns);
        s1.splice(0, s1.length);
        shortestPath.splice(0, shortestPath.length);
        props.setIsWorking(true);

        s1.push(props.start);
        visitNext();
    }


    const visitNext = () => {
        if (s1.length === 0) {
            window.alert("Dfs failed")
            toast.error("Cannot find path", toastOptions);
            return 0;
        }

        if (!canVisit(s1[s1.length - 1])) {
            //this is a dead end, pop from end of stack
            shortestPath.splice(shortestPath.length - 1, 1);
            s1.splice(s1.length - 1, 1);
        } else if (document.getElementById(s1[s1.length - 1]).classList.contains('end-node')) {
            //clear the stack
            toast.success("Found the shortest path", toastOptions);
            props.setIsWorking(false);
            document.getElementById(s1[s1.length - 1]).classList.add('found-node');
            setTimeout(() => {
                addShortestPath(shortestPath, 0, props.speed);
            }, 1000);

            return 1;

        } else {
            let node = s1[s1.length - 1];
            s1.splice(s1.length - 1, 1);
            document.getElementById(node).classList.add('visited-node');

            shortestPath.push(node);
            //remove current node 
            //add all neighbors to stack
            if (canVisit(Attribute(node, "u"))) s1.push(Attribute(node, "u"));
            if (canVisit(Attribute(node, "l"))) s1.push(Attribute(node, "l"));
            if (canVisit(Attribute(node, "d"))) s1.push(Attribute(node, "d"));
            if (canVisit(Attribute(node, "r"))) s1.push(Attribute(node, "r"));

            setTimeout(() => {
                return visitNext();
            }, props.speed)
        }
    }

    return <Button color="success" variant="contained" onClick={dfs} disabled={props.isWorking}>
        <PlayArrowRounded /> Visualize DFS
    </Button>
}