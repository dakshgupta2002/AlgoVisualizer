import * as React from 'react';
import AlgoPicker from './AlgoPicker';
import SpeedAction from './SpeedAction';
import VisualizeAction from './VisualizeAction';
import Tutorial from '../../Tutorial/Tutorial'

export default function Actions(props) {

    const actions = {
        backgroundColor: 'white',
        width: '100vw',
        margin: '0px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: '5px',
        paddingBottom: '5px',
        marginBottom: '5px'
    }

    //speed of the animation
    const [speed, setSpeed] = React.useState('400');
    //pick algorithm
    const [algo, setAlgo] = React.useState('bfs')


    return (
        <div style={actions}>
            <AlgoPicker algo={algo} setAlgo={setAlgo} />
            <Tutorial />
            <VisualizeAction algo={algo} speed={speed} start={props.start} end={props.end} rows={props.rows} columns={props.columns} />

            <SpeedAction speed={speed} setSpeed={setSpeed} />


        </div >
    )
}
