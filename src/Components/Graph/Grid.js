// https://clementmihailescu.github.io/Pathfinding-Visualizer/#

import React, { useState } from 'react';
import Node from './Node';
import './Grid.css'
import Actions from './header/Actions';
import { clearBoard } from '../Algorithms/Clear';

const row = {
  'display': 'flex'
}

export default function Grid() {

  //set columns dynamically
  //26 is node width
  const [columns, setColumns] = useState(Math.floor(window.innerWidth / 26));
  const [rows, setRows] = useState(Math.floor( 9 * window.innerHeight / 26 / 10));
  window.addEventListener('resize', (e) => {
    setColumns(Math.floor(window.innerWidth / 30));
    setRows(Math.floor( 4 * window.innerHeight / 26 / 5));
    clearBoard();
  })
  
    //there will be only one start and end
    //make unique ids for each node and set these states
    //to those unique ids
    const [start, setStart] = useState(`node-${rows/2}-0`);
    const [end, setEnd] = useState(`node-${rows/2}-${columns-1}`);
    
  //listen for key press and key up 
  //set the states and pass to each node
  const [sKey, setSKey] = useState(false)
  const [wKey, setWKey] = useState(false)
  const [eKey, setEKey] = useState(false)

  window.addEventListener('keydown', (e) => {
    if (e.key === 's') setSKey(true);
    else if (e.key === 'w') setWKey(true);
    else if (e.key === 'e') setEKey(true);
  })

  window.addEventListener('keyup', (e) => {
    if (e.key === 's') setSKey(false);
    else if (e.key === 'w') setWKey(false);
    else if (e.key === 'e') setEKey(false);
  })


  //create the grid 
  //with div element as each small Node 
  var newGrid = new Array(rows); var nodekey = 0;

  for (var j = 0; j < rows; j++) {
    var temp = new Array(columns);

    for (var i = 0; i < columns; i++) {
      
      temp[i] = (<Node row={j} col={i} key={nodekey}
        start={start} setStart={setStart}
        end={end} setEnd={setEnd}
        sKey={sKey} wKey={wKey} eKey={eKey} />)
      nodekey += 1;
    }
    newGrid[j] = (<div style={row} key={j}>{temp}</div>);
  }


  return (<div className='body'>
    <Actions start={start} end={end} rows={rows} columns={columns}/>
    {newGrid}
  </div>);


}
