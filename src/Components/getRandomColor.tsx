
const getRandomColor = function (): string {
  const val1 = Math.floor(Math.random() * 256);
  const val2 = Math.floor(Math.random() * 256);
  const val3 = Math.floor(Math.random() * 256);
  return `rgb(${val1}, ${val2}, ${val3})`;
};
export default getRandomColor;
