// import { Attribute } from '../Helper/Attribute'
// import { clearVisited } from '../Helper/Clear';

// var found = 0; var speed = 200;
// var shortestPath = [];

// export const DfsSquare = (rows, columns, start, end, newSpeed) => {
//     found = 0; shortestPath.splice(0, shortestPath.length); speed = newSpeed;
//     clearVisited(rows, columns);

//     return squareBFS(rows, columns, start, end);
// }

// const squareBFS = (rows, columns, start, end) => {
//     if (found === 1) return 0;
//     //if visited or null dont go ahead
//     if (document.getElementById(start) === null) return 1000;
//     if (document.getElementById(start).classList.contains('visited-node')) return 1000;
//     if (document.getElementById(start).classList.contains('wall-node')) return 1000;
//     //if this is final node return true
//     if (document.getElementById(start).classList.contains('end-node')) {
//         document.getElementById(start).classList.add('found-node')
//         found = 1; return 0;
//     }
//     document.getElementById(start).classList.add('visited-node');
//     setTimeout(() => {
//         squareBFS(rows, columns, Attribute(start, "u"), end)
//         setTimeout(() => {
//             squareBFS(rows, columns, Attribute(start, "d"), end)
//             setTimeout(() => {
//                 squareBFS(rows, columns, Attribute(start, "r"), end)
//                 setTimeout(() => {
//                     squareBFS(rows, columns, Attribute(start, "l"), end)
//                     setTimeout(() => {
//                         squareBFS(rows, columns, Attribute(Attribute(start, "l"), "u"), end)
//                         setTimeout(() => {
//                             squareBFS(rows, columns, Attribute(Attribute(start, "l"), "d"), end)
//                             setTimeout(() => {
//                                 squareBFS(rows, columns, Attribute(Attribute(start, "r"), "u"), end)
//                                 setTimeout(() => {
//                                     squareBFS(rows, columns, Attribute(Attribute(start, "r"), "d"), end)
//                                 }, parseInt(speed/10));
//                             }, parseInt(speed/10));
//                         }, parseInt(speed/10));
//                     }, parseInt(speed/10));
//                 }, parseInt(speed/10));
//             }, parseInt(speed/10));
//         }, parseInt(speed/10));
//     }, parseInt(speed));
// };
