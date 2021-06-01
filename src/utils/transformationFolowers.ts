export const transformationFolowers = (folowers: number | null) => {
  if (folowers === null) {
    return 0;
  }
  if (folowers > 1000) {
    const divisionBy1000 = folowers / 1000;
    const transformationString = `${divisionBy1000.toFixed(1)}k`;
    return transformationString;
  }
  return folowers;
};
