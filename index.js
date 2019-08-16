var kittens = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(array, element) {
  return [element, ...array]
}

