'use strict';


const rComment = /^\s*\/\*[^*]*\*+([^\/*][^*]*\*+)*\//;

// @name
// @name: value
// @name: 'value'
// @name: "value"
const rAnno = /@([-\w]+)(?:\s*:\s*(?:([-\w]+)|(?:['"]([^'"]+)['"])))?/g;


module.exports = function(body, name) {
  const match = rComment.exec(body);
  if (!match) {
    return null;
  }
  return tryGet(match[0], rAnno, name);
};


function tryGet(body, re, name) {
  re.lastIndex = 0;
  let match = null;
  do {
    match = re.exec(body);
  } while (match && match[1] !== name);

  return match ? (match[2] || match[3] || true) : null;
}



