export default function rangeSlice({ x, xstart, xend, range, xfrom, xto, step, type }) {
  const width = xend - xstart;
  let result;
  const pstep = step / range; //step in %

  if (type === "from") {
    if (x >= xstart && x <= xto) {
      result = Math.floor((x - xstart) / width / pstep) / range;
      console.log((x - xstart) / width / pstep);
    } else if (x < xstart) {
      result = 0;
    } else if (x > xto) {
      result = Math.floor((xto - xstart) / width / pstep) / range - pstep;
    }
  }

  if (type === "to") {
    if (x >= xfrom && x <= xend) {
      result = Math.ceil((x - xstart) / width / pstep) / range;
    } else if (x < xfrom) {
      result = Math.ceil((xfrom - xstart) / width / pstep) / range + pstep;
    } else if (x > xend) {
      result = 1;
    }
  }
  return result;
}
