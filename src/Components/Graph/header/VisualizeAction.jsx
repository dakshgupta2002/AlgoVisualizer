import * as React from 'react';
//algorithms
import { clearBoard } from '../../Helper/Clear';
import BfsVisualizer from '../../Algorithms/Bfs';
import DfsVisualizer from '../../Algorithms/Dfs';
//mui
import { Button, Stack } from '@mui/material';
import { ClearAll, PlayArrowRounded } from '@mui/icons-material';
//toast
import { toast, ToastContainer } from 'react-toastify';
import { toastOptions } from './Actions';
import 'react-toastify/dist/ReactToastify.css';

export default function VisualizeAction(props) {

    return <div>
        <Stack direction="row" spacing={2}>
            {props.algo === 'Pick' &&
                <Button color="success" variant="contained" disabled={props.isWorking} onClick={() => {
                    toast.warn("Pick a valid Algorithm", toastOptions);
                }}>
                    <PlayArrowRounded /> Visualize
                </Button>
            }

            {props.algo === 'bfs' &&
                <BfsVisualizer start={props.start} speed={props.speed} rows={props.rows} columns={props.columns} setIsWorking={props.setIsWorking} isWorking={props.isWorking}/>}
            {props.algo === 'dfs' &&
                <DfsVisualizer start={props.start} speed={props.speed} rows={props.rows} columns={props.columns} setIsWorking={props.setIsWorking} isWorking={props.isWorking} />}


            <Button color="secondary" variant="outlined" disabled={props.isWorking} onClick={() => {
                clearBoard(props.rows, props.columns);
            }}>
                <ClearAll /> Clear
            </Button>

            <ToastContainer />


        </Stack>
    </div>;
}
