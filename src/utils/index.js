module.exports = {
  convertRemToPixels: rem => {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }
};
