const removeDuplicates = (arr) => {
  const cleanArray = reduceArray(arr)
  return cleanArray
}

const reduceArray = (array) => {
  return array.reduce((unique, item) => {
    const uniqueName = unique.map(a => a.name)    
    return uniqueName.includes(item.name) ? unique : [...unique, item];
  }, []);
}

export { removeDuplicates }