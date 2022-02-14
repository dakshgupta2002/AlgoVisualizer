import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Box, Slider } from '@mui/material';

export default function SpeedAction(props) {

    const handleSpeed = (event, newSpeed) => {
        props.setSpeed(newSpeed);
    };


    return <div>
        <Box style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
            <div style={{width: 'fit-content'}}>
                Rows:
                <Slider
                    size="small"
                    value={props.rows}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { props.setRows(e.target.value) }}
                    min={2}
                    color="secondary"
                    disabled={props.isWorking}
                />
                Columns:
                <Slider
                    size="small"
                    value={props.columns}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={(e) => { props.setColumns(e.target.value) }}
                    min={2}
                    color="secondary"
                    disabled={props.isWorking}
                />
            </div>

            <ToggleButtonGroup
                value={props.speed}
                exclusive
                onChange={handleSpeed}
                aria-label="text alignment"
                size="small"
                sx={{mx: 5, height :'50%'}}
                disabled={props.isWorking}
            >
                <ToggleButton value="75" aria-label="centered">
                    Slow
                </ToggleButton>
                <ToggleButton value="50" aria-label="right aligned">
                    Medium
                </ToggleButton>
                <ToggleButton value="20" aria-label="justified">
                    Fast
                </ToggleButton>
            </ToggleButtonGroup>

        </Box>

    </div>
}
