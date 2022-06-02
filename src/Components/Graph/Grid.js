// https://clementmihailescu.github.io/Pathfinding-Visualizer/#

import React, { useState } from 'react';
import Node from './Node';
import './Grid.css'
import Actions from './header/Actions';
import { clearBoard } from '../Helper/Clear';

const row = {
  'display': 'flex'
}

export default function Grid() {

  //set columns dynamically
  //26 is node width
  const [columns, setColumns] = useState(Math.floor(window.innerWidth / 26.5));
  const [rows, setRows] = useState(Math.floor(8.5 * window.innerHeight / 26 / 10));
  window.addEventListener('resize', (e) => {
    setColumns(Math.floor(window.innerWidth / 30));
    setRows(Math.floor(4 * window.innerHeight / 26 / 5));
    clearBoard(rows, columns);
  })

  //there will be only one start and end
  //make unique ids for each node and set these states
  //to those unique ids
  const [start, setStart] = useState(`node-${rows / 2}-0`);
  const [end, setEnd] = useState(`node-${rows / 2}-${columns - 1}`);

  //listen for key press and key up 
  //set the states and pass to each node
  const [sKey, setSKey] = useState(false)
  const [wKey, setWKey] = useState(false)
  const [eKey, setEKey] = useState(false)
  const [startDrag, setStartDrag] = useState(false);
  const [endDrag, setEndDrag] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);

  window.addEventListener('keydown', (e) => {
    if (e.key === 's' || e.key==='S') setSKey(true);
    else if (e.key === 'w' || e.key === 'W') setWKey(true);
    else if (e.key === 'e' || e.key === 'E') setEKey(true);
  })

  window.addEventListener('keyup', (e) => {
    if (e.key === 's' || e.key==='S') setSKey(false);
    else if (e.key === 'w' || e.key === 'W') setWKey(false);
    else if (e.key === 'e' || e.key === 'E') setEKey(false);
  })
  window.addEventListener('mousedown', (e) => {
    setMouseDown(true);
    if (e.target.id === start) setStartDrag(true);
    else if (e.target.id === end) setEndDrag(true);
  })

  window.addEventListener('mouseup', (e) => {
    setMouseDown(false);
    setStartDrag(false); 
    setEndDrag(false);
  });

  //create the grid 
  //with div element as each small Node 
  var newGrid = new Array(rows); var nodekey = 0;

  for (var j = 0; j < rows; j++) {
    var temp = new Array(columns);

    for (var i = 0; i < columns; i++) {

      temp[i] = (<Node row={j} col={i} key={nodekey}
        start={start} setStart={setStart}
        end={end} setEnd={setEnd}
        sKey={sKey} wKey={wKey} eKey={eKey} 
        startDrag={startDrag} endDrag={endDrag} 
        mouseDown={mouseDown}/>)
      nodekey += 1;
    }
    newGrid[j] = (<div style={row} key={j}>{temp}</div>);
  } 

  React.useEffect( () => {
    setStart(`node-${Math.floor(rows / 2)}-${Math.floor(columns / 3)}`);
    setEnd(`node-${Math.floor(rows / 2)}-${Math.floor(2*columns/3)}`);
  }, [rows, columns])


  return (<div className='body'>
    <Actions start={start} end={end} rows={rows} columns={columns} setRows={setRows} setColumns={setColumns} setStart={setStart} setEnd={setEnd} />
    {newGrid}
  </div>);


}
