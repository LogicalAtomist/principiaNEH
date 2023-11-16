import { Draw } from './Draw.js'
import { Graph } from './Graph.js'
import { table } from './datatable.js'

const pm = new Graph()

function processChapters({ chapterNumbers = null, GAP = 300, PAD = 50, x = 0 } = {}) {
  const excluded = ['8', '89'];
  const chapters = pm.getChapterNumbers().filter(chapter => !excluded.includes(chapter));
  let chapterData = {};

  if (!chapterNumbers) {
    for (let chapter of chapters) {
      let [chapter_nodes, maxX] = pm.plot(chapter, x, 0, PAD);
      chapterData[chapter] = chapter_nodes;
      x = maxX + GAP;
    }
  } else {
    for (let chapter of chapterNumbers) {
      let [chapter_nodes, maxX] = pm.plot(chapter, x, 0, PAD);
      chapterData[chapter] = chapter_nodes;
      x = maxX + GAP;
    }
  }
  return chapterData;
}
/*
new Draw('#container', processChapters(), {
  xOffset: 20,
  yOffset: 20,
  shape: 'circle',
  size: 5,
  fill: '#CC5500',
  textFontSize: 12,
  textFill: 'black'
})
*/

function miniMap(chapters) {
  const content = processChapters({chapterNumbers: chapters, GAP: 100, PAD: 10})
  new Draw('#container', content, {
    xOffset: 20,
    yOffset: 20,
    shape: 'circle',
    size: 5,
    fill: '#CC5500',
    textFontSize: 24,
    textFill: 'black',
    minimap: true
  })
}

function normalMap() {
  new Draw('#container', processChapters(), {
    xOffset: 20,
    yOffset: 20,
    shape: 'circle',
    size: 5,
    fill: '#CC5500',
    textFontSize: 12,
    textFill: 'black'
  })

}


//miniMap(['24', '25'])

normalMap()
