import { Graph, NodeVisualizer } from './functions'
import { table } from './datatable.js'

const graph = new Graph()
let low = graph.generateLowestNumbers()
console.log(low)