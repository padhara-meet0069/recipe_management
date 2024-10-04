
import React from 'react';

function RecipeDetail({ recipe, handleEdit, handleDelete }) {
  if (!recipe) return <p>Select a recipe to view details.</p>;

  return (
    <div className="container">
      <h2>{recipe.title}</h2>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
      <h5>Ingredients:</h5>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h5>Instructions:</h5>
      <p>{recipe.instructions}</p>
      <button className="btn btn-secondary" onClick={handleEdit}>
        Edit Recipe
      </button>
      <button className="btn btn-danger ml-2" onClick={handleDelete}>
        Delete Recipe
      </button>
    </div>
  );
}

export default RecipeDetail;
