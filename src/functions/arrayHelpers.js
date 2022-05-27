const changeKeyNames = (allergiesArray) => {
  const changedArray = allergiesArray.map((ingredientObj) => {
    const a = ingredientObj.allergy_id
    const i = ingredientObj.name
    return {
      allergy_id: a,
      ingredient_name: i
    }
  })
  return changedArray
}

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

export { changeKeyNames, removeDuplicates }