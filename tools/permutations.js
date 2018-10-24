function permutationsWihtRepeat(options, moves = options.length) {
  if (moves === 1) {
    return options.map(permutationOption => [permutationOption]);
  }

  // Init permutations array.
  const permutations = [];

  // Go through all options and join it to the smaller permutations.
  options.forEach((currentOption) => {
    const smallerPermutations = permutationsWihtRepeat(
      options,
      moves - 1,
    );

    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });
  return permutations;
}

module.exports = permutationsWihtRepeat