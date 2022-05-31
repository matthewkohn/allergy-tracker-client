import React, { createContext, useEffect, useState } from 'react'

const AllergyContext = createContext()

const AllergyProvider = ({ children }) => {
  const [allergiesFromDb, setAllergiesFromDb] = useState([])
  // console.log("AllergiesFromDB: ", allergiesFromDb)
  const value = [allergiesFromDb, setAllergiesFromDb]

  useEffect(() => {
    fetch('http://localhost:9292/allergies')
    .then(res => res.json())
    .then(setAllergiesFromDb)
    .catch(console.log)
  }, [])

  return (
    <AllergyContext.Provider value={ value } >
      { children }
    </AllergyContext.Provider>
  )
}

export { AllergyContext, AllergyProvider }