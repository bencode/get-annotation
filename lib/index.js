'use strict';


const rComment = /^\s*\/\*[^*]*\*+([^\/*][^*]*\*+)*\//;


// @name
// @name: value   // no space value

const rAnno = /@([-.\w]+)(?:\s*:\s*(\S+))?/g;

/**
 * get annotation from souce
 *
 * @param {String} body - souce
 * @param {String} name - name
 * @return {String|Booean} - result
 */
module.exports = function(body, name) {
  const match = rComment.exec(body);
  if (!match) {
    return null;
  }
  return tryGet(match[0], rAnno, name);
};


const rNum = /\d+(\.\d+)?/;

function tryGet(body, re, name) {
  re.lastIndex = 0;
  let match = null;
  do {
    match = re.exec(body);
  } while (match && match[1] !== name);

  if (!match) {
    return null;
  }

  const v = match[2];
  if (!v) {
    return true;
  }

  if (v === 'true') {
    return true;
  }
  if (v === 'false') {
    return false;
  }
  if (rNum.test(v)) {
    return parseFloat(v);
  }
  return v;
}
