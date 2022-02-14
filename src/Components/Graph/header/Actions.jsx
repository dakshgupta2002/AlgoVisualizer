import * as React from 'react';
import AlgoPicker from './AlgoPicker';
import SpeedAction from './SpeedAction';
import VisualizeAction from './VisualizeAction';
import Tutorial from '../../Tutorial/Tutorial'
import '../Grid.css'

export const toastOptions = {
    position: "bottom-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
}

export default function Actions(props) {

    const [isWorking, setIsWorking] = React.useState(false);
    //speed of the animation
    const [speed, setSpeed] = React.useState('20');
    //pick algorithm
    const [algo, setAlgo] = React.useState('Pick')

    return (
        <div className="actions">
            <a style={{ textDecoration: 'none' }} href="/"> <h3 style={{ color: 'darkblue', fontWeight: "15", marginLeft: '5px' }}>Pathfinding Visualizer</h3> </a>

            <AlgoPicker isWorking={isWorking} setIsWorking={setIsWorking} algo={algo} setAlgo={setAlgo} 
                start={props.start} end={props.end} setStart={props.setStart} setEnd={props.setEnd}
                rows={props.rows} columns={props.columns} />

            {/* only when we visualize or make maze, we want to set isWorking to true */}
            <VisualizeAction isWorking={isWorking} setIsWorking={setIsWorking} algo={algo} speed={speed} start={props.start} end={props.end} rows={props.rows} columns={props.columns} />

            <SpeedAction isWorking={isWorking} speed={speed} setSpeed={setSpeed} rows={props.rows} columns={props.columns} setRows={props.setRows} setColumns={props.setColumns} />

            <Tutorial isWorking={isWorking} />

        </div >
    )
}
