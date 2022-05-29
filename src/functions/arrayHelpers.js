const formatData = (data) => {
  return data.map((obj) => {
    let allergies = []
    if (obj.allergies.length > 0) {
      allergies = findAllergies(obj)
    }
    return {
      id: obj.id,
      name: obj.name,
      description: obj.description,
      price: obj.price,
      allergy_ids: allergies
    }
  })
}

const findAllergies = (obj) => {
  const allergiesArr = obj.allergies
  const ingredientsArr = obj.ingredients
  if (allergiesArr.length > 0) {
    return allergiesArr.map((alrg) => {
      let ing = ingredientsArr.find(el => el.allergy_id === alrg.id)
      return {
        allergy_id: ing.allergy_id,
        allergy_name: alrg.name,
        ingredient_name: ing.name
      }
    })
  } else {
    return []
  }
}

const removeDuplicates = (array) => {
  return array.reduce((unique, item) => {
    const uniqueName = unique.map(a => a.name)    
    return uniqueName.includes(item.name) ? unique : [...unique, item];
  }, []);
}

export { formatData, removeDuplicates }