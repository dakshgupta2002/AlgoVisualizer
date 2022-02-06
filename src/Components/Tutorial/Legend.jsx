import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../Components/Graph/Grid.css';


export default function Legend() {
    return <Box style={{display: 'flex', flexDirection: 'row'}}>
        <Typography className='node start-node'>
            <b>S</b>
        </Typography> 
        <Typography className='node end-node'>
            <b>E</b>
        </Typography> 
        <Typography className='node wall-node'>
            <b>W</b>
        </Typography>
    </Box>;
}
