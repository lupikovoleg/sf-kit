/**
 * Array Shuffle http://bost.ocks.org/mike/shuffle/
 * @param o Array to shuffle
 * @returns Array
 */
export function arrayShuffle(o) {
  let array = o.slice();
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
