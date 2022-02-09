import * as React from 'react';
import AlgoPicker from './AlgoPicker';
import SpeedAction from './SpeedAction';
import VisualizeAction from './VisualizeAction';
import Tutorial from '../../Tutorial/Tutorial'
import { mazeBuilder } from '../../Algorithms/Mazes';

export default function Actions(props) {

    const actions = {
        backgroundColor: 'white',
        width: '100vw',
        margin: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }

    //speed of the animation
    const [speed, setSpeed] = React.useState('400');
    //pick algorithm
    const [algo, setAlgo] = React.useState('bfs')
    const [maze, setMaze] = React.useState("Mazes");

    React.useEffect( () => {
        mazeBuilder(maze, props.start, props.end, props.row, props.columns);
    }, [maze, props.columns, props.row, props.end,  props.start])

    return (
        <div style={actions}>
            <a style={{textDecoration: 'none'}} href="/"> <h4 style={{color: 'darkblue'}}>Pathfinding Visualizer</h4> </a>
            
            <AlgoPicker algo={algo} setAlgo={setAlgo} maze={maze} setMaze={setMaze}/>
            
            <VisualizeAction algo={algo} speed={speed} start={props.start} end={props.end} rows={props.rows} columns={props.columns} />

            <SpeedAction speed={speed} setSpeed={setSpeed} />

            <Tutorial />

        </div >
    )
}
