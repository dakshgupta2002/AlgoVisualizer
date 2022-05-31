import React, { useState } from 'react';
import './Grid.css'
export default function Node(props) {


    const [wall, setWall] = useState(0);
    const id = `node-${props.row}-${props.col}`;

    //this is the most important part
    //if start is looking to this id then add start-node 
    const addClasses = `
    node
    ${id === props.start
            ? " start-node"
            : id === props.end
                ? "end-node"
                : wall === 1 ?
                    "wall-node"
                    : ""
        }`


    return <div id={id} className={addClasses} distance={Infinity} route = {[]}
        onMouseEnter={(e) => {
            if (props.wKey) setWall(wall ^ 1);
            if (props.sKey) props.setStart(id);
            if (props.eKey) props.setEnd(id);

            document.getElementById(id).classList.add('active-node');
            console.log("Enter")
        }}
        onClick={(e) => {
            if (props.sKey) props.setStart(id);
            if (props.eKey) props.setEnd(id)
            if (props.wKey) setWall(wall ^ 1);

        }}
        onMouseLeave={(e) => {
            document.getElementById(id).classList.remove('active-node')
        }}
    >

    </div>

}
