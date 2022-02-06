import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels(props) {

  const handleChange = (event) => {
    props.setAlgo(event.target.value);
  };

  return (
    <div>        
      <FormControl sx={{ height:"70%", minWidth: 120 }}>
        <Select
          value={props.algo}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={"bfs"}>4-direction BFS</MenuItem>
          <MenuItem value={"squareTraversal"}>8-direction BFS</MenuItem>
          <MenuItem value={"dfs"}>DFS</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}