import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../Components/Graph/Grid.css';


export default function Legend() {
    return <Box style={{}}>
        <Typography className='node start-node'>
            <b>S</b> 
        </Typography>TART  <br/>
        <Typography className='node end-node'>
            <b>E</b> 
        </Typography>ND  <br/>
        <Typography className='node wall-node'>
            <b>W</b> 
        </Typography>ALLS <br/>
    </Box>;
}
