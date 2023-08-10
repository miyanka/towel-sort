module.exports = function towelSort(matrix) {
    return !matrix
        ? []
        : matrix
              .map((item, index) => (!(index % 2) ? item : item.reverse()))
              .flat();
};
