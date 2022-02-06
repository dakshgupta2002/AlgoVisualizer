import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function SpeedAction(props) {

    const handleSpeed = (event, newSpeed) => {
        props.setSpeed(newSpeed);
    };


    return <div>

        <ToggleButtonGroup
            value={props.speed}
            exclusive
            onChange={handleSpeed}
            aria-label="text alignment"
        >
            <ToggleButton value="700" aria-label="centered">
                Slow
            </ToggleButton>
            <ToggleButton value="400" aria-label="right aligned">
                Medium
            </ToggleButton>
            <ToggleButton value="200" aria-label="justified">
                Fast
            </ToggleButton>
        </ToggleButtonGroup>


    </div>
}
