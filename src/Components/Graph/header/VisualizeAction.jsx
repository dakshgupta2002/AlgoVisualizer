import * as React from 'react';
import { DfsTriangle } from '../../Algorithms/DfsTriangle';
import { clearBoard } from '../../Algorithms/Clear';
import { DfsSquare } from '../../Algorithms/DfsSquare';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ClearAllIcon from '@mui/icons-material/ClearAll';

export default function VisualizeAction(props) {
    const handleVisualize = () => {
        if (props.algo === 'bfs') {
            DfsTriangle(props.rows, props.columns, props.start, props.end,  props.speed);
        } else if (props.algo === 'squareTraversal') {
            console.log(props.algo)
            DfsSquare( props.rows, props.columns, props.start, props.end, props.speed);
        }
    }
    return <div>
        <Stack direction="row" spacing={2}>
            <Button color="success" variant="contained" onClick={handleVisualize}>
                <PlayArrowIcon /> Visualize
            </Button>


            <Button color="secondary" variant="outlined" onClick={() => {
                clearBoard(props.rows, props.columns);
            }}>
                <ClearAllIcon /> Clear
            </Button>
        </Stack>
    </div>;
}
