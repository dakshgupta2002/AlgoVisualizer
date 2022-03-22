import { Attribute, canVisit, addShortestPath } from "../Helper/Attribute";
import { clearVisited } from "../Helper/Clear";
import { toast } from "react-toastify";
import { toastOptions } from "../Graph/header/Actions";
import { PlayArrowRounded } from '@mui/icons-material';
import {Button} from '@mui/material';

export default function BfsVisualizer(props) {
    var s1 = []
    var shortestPath = [];

    const bfs = () => {
        clearVisited(props.rows, props.columns);
        s1.splice(0, s1.length);
        shortestPath.splice(0, shortestPath.length);
        
        props.setIsWorking(true);
        s1.push(props.start);
        return visitNext();
    }


    const visitNext = () => {
        if (s1.length === 0) {
            props.setIsWorking(false);
            toast.error("Cannot find path", toastOptions);
            return 0;
        }

        if (!canVisit(s1[0])) {
            //this is a dead end, pop from end of stack
            shortestPath.splice(0, 1);
            s1.splice(0, 1);

        } else if (document.getElementById(s1[0]).classList.contains('end-node')) {
            //found answer, return
            document.getElementById(s1[0]).classList.add('found-node');
            props.setIsWorking(false);
            toast.success('Found the shortest path', toastOptions);

            setTimeout(() => {
                addShortestPath(shortestPath, 0, props.speed);
            }, 1000);
            return 1;

        } else {
            let node = s1[0];
            s1.splice(0, 1);
            document.getElementById(node).classList.add('visited-node');

            shortestPath.push(node);
            //remove current node 
            //add all neighbors to stack
            if (canVisit(Attribute(node, "l"))) s1.push(Attribute(node, "l"));
            if (canVisit(Attribute(node, "d"))) s1.push(Attribute(node, "d"));
            if (canVisit(Attribute(node, "r"))) s1.push(Attribute(node, "r"));
            if (canVisit(Attribute(node, "u"))) s1.push(Attribute(node, "u"));
        }

        setTimeout(() => {
            return visitNext();
        }, props.speed);
    }


    return <Button color="success" variant="contained" onClick={bfs} disabled={props.isWorking}>
        <PlayArrowRounded /> Visualize BFS
    </Button>

}