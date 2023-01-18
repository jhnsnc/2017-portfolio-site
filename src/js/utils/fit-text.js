// Findest the largest font-size for container such that the container's targetDimension (height/width) does not exceed targetSize.
// Bounded by minFontSize and maxFontSize, if provided.
export default function fitText(
  container,
  targetDimension,
  targetSize,
  minFontSize,
  maxFontSize
) {
  let low = minFontSize || 0;
  let high = maxFontSize || 0;
  let iterations = 0;
  function getBestFontSize(fontSize) {
    // early exit
    iterations += 1;
    if (iterations >= 20) {
      return low;
    }

    // check if font size fits
    container.style.fontSize = `${fontSize}px`;
    const comparisonSize =
      targetDimension === 'width'
        ? container.getBoundingClientRect().width
        : container.getBoundingClientRect().height;
    if (comparisonSize <= targetSize) {
      low = fontSize;
    } else {
      high = fontSize;
    }

    // check for exit condition
    if (!low) {
      return getBestFontSize(Math.floor(fontSize / 2));
    } else if (!high) {
      return getBestFontSize(fontSize * 2);
    } else {
      if (high - low > 1) {
        return getBestFontSize(Math.floor(0.5 * (low + high)));
      } else {
        return low; // exit!
      }
    }
  }

  const firstTestSize = minFontSize
    ? maxFontSize
      ? Math.floor(0.5 * (minFontSize + maxFontSize))
      : minFontSize + 16
    : 32;
  container.style.fontSize = `${getBestFontSize(firstTestSize)}px`;
}
