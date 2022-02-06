import { Attribute } from './Attribute'
import { clearVisited } from './Clear';

var found = 0; var shortestPath = []; var speed=200;
export const DfsTriangle =  (rows, columns, start, end, newSpeed) => {
    if (start===null) return -1;
    found = 0; shortestPath.splice(0, shortestPath.length); speed=newSpeed;
    clearVisited(rows, columns);

    return VisualizeDfs(rows, columns, start, end);
}

const VisualizeDfs = (rows, columns, start, end) => {
    if (found === 1) return 0;
    //if visited or null dont go ahead
    if (document.getElementById(start) === null) return 1000;
    if (document.getElementById(start).classList.contains('visited-node')) return 1000;
    if (document.getElementById(start).classList.contains('wall-node')) return 1000;
    //if this is final node return true
    if (document.getElementById(start).classList.contains('end-node')) {
        document.getElementById(start).classList.add('found-node');
        found = 1; return 0;
    }

    document.getElementById(start).classList.add('visited-node');
    //else find in all four directions
    setTimeout(() => {
        VisualizeDfs(rows, columns, Attribute(start, "u"), end)
        setTimeout(() => {
            VisualizeDfs(rows, columns, Attribute(start, "d"), end)
            setTimeout(() => {
                VisualizeDfs(rows, columns, Attribute(start, "r"), end)
                setTimeout(() => {
                    VisualizeDfs(rows, columns, Attribute(start, "l"), end)
                }, parseInt(speed/10));
            }, parseInt(speed/10));
        }, parseInt(speed/10));
    }, parseInt(speed));
};
