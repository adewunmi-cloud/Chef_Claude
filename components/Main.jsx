import { useState } from "react"


export default function Main () {
  const [ingredients, setIngredients] = useState([])
  const ingredientsList = ingredients.map(item => <li key={item}>{item}</li>)

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    setIngredients(prev => [...prev, newIngredient])
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input 
        type="text"
        placeholder="e.g Oregano"
        aria-label="Add ingredient"
        name="ingredient" />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsList}</ul>
    </main>
  )
}