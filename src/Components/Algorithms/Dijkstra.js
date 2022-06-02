import { PlayArrowRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { toastOptions } from "../Graph/header/Actions";
import { Attribute, canVisit, addShortestPath } from "../Helper/Attribute";
import { clearVisited } from "../Helper/Clear";


export default function DijkstraVisualizer(props) {
    //to mark visited we add the class 
    //while updating the distance, it is inside the map
    var candidates = new Map(); 

    const dijkstra = () => {
        props.setIsWorking(true);
        clearVisited(props.rows, props.columns);

        candidates.clear();
        candidates.set(props.start, [0, []]);  //map node id to distance and route 
        
        return visitNext();
    }

    const visitNext = async () => {
        if (candidates.size === 0) {
            toast.error("Cannot find path", toastOptions);
            props.setIsWorking(false);
            return;
        }

        //find the closest node to visit
        let pos="", minDist=Infinity;
        for (const i of candidates.keys()){
            if (candidates.get(i)[0] < minDist){
                pos = i;
                minDist = candidates.get(i)[0];
            }
        }        

        const handleNewNode = (id) => {
            //if we would have visited this node before, we will update the distance to better option
            candidates.set(id, [candidates.get(pos)[0] + 1, candidates.get(pos)[1].concat(pos)]);
            return 0;            
        }
        const handleEndNode = (id) => {
            props.setIsWorking(false);
            document.getElementById(id).classList.add('found-node');
            setTimeout( () => {addShortestPath(candidates.get(id)[1], 0, props.speed)} , 1000);
            toast.success("Shortest Path Found", toastOptions);
        }
        //i will now explore this closest node and update distance of all its neighbours
        if (canVisit(Attribute(pos, "u"))) {
            const id=Attribute(pos, "u");
            handleNewNode(id);
            if (document.getElementById(id).classList.contains("end-node")) {
                handleEndNode(id);
                return;
            }
        }
        if (canVisit(Attribute(pos, "d"))) {
            const id=Attribute(pos, "d");
            handleNewNode(id);
            if (document.getElementById(id).classList.contains("end-node")) {
                handleEndNode(id);
                return;
            }
        }
        if (canVisit(Attribute(pos, "l"))) {
            const id=Attribute(pos, "l");
            handleNewNode(id);
            if (document.getElementById(id).classList.contains("end-node")) {
                handleEndNode(id);
                return;
            }
        }
        if (canVisit(Attribute(pos, "r"))) {
            const id=Attribute(pos, "r");
            handleNewNode(id);
            if (document.getElementById(id).classList.contains("end-node")) {
                handleEndNode(id);
                return;
            }
        }
        //this node's work is done, remove from map
        document.getElementById(pos).classList.add("visited-node");
        candidates.delete(pos);


        setTimeout( () => {
            return visitNext();
        }, props.speed);
    }

    return <Button color="success" variant="contained" onClick={dijkstra} disabled={props.isWorking}>
        <PlayArrowRounded /> Visualize Dijkstra
    </Button>
}