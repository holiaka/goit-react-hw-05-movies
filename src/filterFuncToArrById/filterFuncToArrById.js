export const filterFuncToArrById = arr => {
  let repetitionIndex = [];
  const reviewIds = arr.map(item => item.id);
  for (let i = 0; i < reviewIds.length; i++) {
    for (let j = 1; j < reviewIds.length; j++) {
      if (i < j && reviewIds[i] === reviewIds[j]) {
        if (!repetitionIndex.includes(j)) {
          repetitionIndex.push(j);
        }
      } 
    }
  }
  const output = arr.filter((item, idx) => !repetitionIndex.includes(idx));
  return output;
};
