import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels(props) {
  const handleChangeAlgo = (event) => {
    props.setAlgo(event.target.value);
  };

  const handleChangeMaze = (event) => {
    props.setMaze(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, display: 'flex', flexDirection: 'row' }}>
        <Select
        sx={{mx: 1}}
          value={props.algo}
          onChange={handleChangeAlgo}
        >
          <MenuItem value={"bfs"}>4-dir BFS</MenuItem>
          <MenuItem value={"squareTraversal"}>8-dir BFS</MenuItem>
          <MenuItem value={"dfs"}>DFS</MenuItem>
        </Select>
        
        
        <Select
          value={props.maze}
          onChange={handleChangeMaze}
        >
          <MenuItem value={"Mazes"}>Pick a Maze</MenuItem>
          <MenuItem value={"Ladder"}>Ladder</MenuItem>
          <MenuItem value={"Trapped"}>Trapped</MenuItem>
          <MenuItem value={"Runner"}>Runner</MenuItem>
        </Select>

      </FormControl>

    </>
  );
}