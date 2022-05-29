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

const formatData = (data) => {
  console.log("data: ", data)
  return data.map((obj) => {
    const allergiesArr = obj.allergies
    console.log("allergies: ", allergiesArr)
    const ingredientsArr = obj.ingredients
    console.log("ingredients: ", ingredientsArr)
    let allergies = []
    if (obj.allergies.length !== 0) {
      allergies = findAllergies(obj)
    }
    // const updatedAllergies = findAllergies(allergiesArr, ingredientsArr)
    // const allergies = ingredientsArr.map(i => {
    //   // findAllergyName(i)
    //   return {
    //     allergy_id: i.allergy_id,
    //     ingredient_name: i.name
    //   }
    // })
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
  if (allergiesArr.length !== 0) {
    return allergiesArr.map((alrg)=>{
      let ing = ingredientsArr.find(el => el.allergy_id === alrg.id)
      console.log("ing: ", ing)
      console.log("alrg: ", alrg)
      return {
        allergy_id: ing.allergy_id,
        allergy_name: alrg.name,
        ingredient_name: ing.name
      }
    })
    // return newArr
  } else {
    return []
  }

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

export { changeKeyNames, formatData, removeDuplicates }