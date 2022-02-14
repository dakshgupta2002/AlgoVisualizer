import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { mazeBuilder } from '../../Algorithms/Mazes';

export default function AlgoPicker(props) {
  const [maze, setMaze] = React.useState("Mazes");
  const handleChangeAlgo = (event) => {
    props.setAlgo(event.target.value);
  };

  const handleChangeMaze = (event) => {
    setMaze(event.target.value);
    props.setIsWorking(true);
    mazeBuilder(event.target.value, props.start, props.end, props.rows, props.columns, props.setStart, props.setEnd, props.setIsWorking);
    setTimeout(() => {
      props.setIsWorking(false);
    },3000)
  };

  return (
    <>
      <Box variant="standard" sx={{ m: 1, minWidth: 120, display: 'flex', flexDirection: 'row' }}>
        <Select
        sx={{mx: 1}}
          value={props.algo}
          onChange={handleChangeAlgo}
          size="small"
          disabled={props.isWorking}
        >
          <MenuItem disabled value={"Pick"}>Pick an Algo</MenuItem>
          <MenuItem value={"bfs"}>BFS</MenuItem>
          <MenuItem value={"squareTraversal"}>8-dir BFS</MenuItem>
          <MenuItem value={"dfs"}>DFS</MenuItem>
        </Select>
        
        
        <Select
          value={maze}
          onChange={handleChangeMaze}
          size="small"
          disabled={props.isWorking}
        >
          <MenuItem disabled value={"Mazes"}>Maze</MenuItem>
          <MenuItem value={"Ladder"}>Ladder</MenuItem>
          <MenuItem value={"Trapped"}>Trapped</MenuItem>
          <MenuItem value={"Runner"}>Runner</MenuItem>
        </Select>

      </Box>

    </>
  );
}