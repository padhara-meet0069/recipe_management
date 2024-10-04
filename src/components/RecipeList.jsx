import React from 'react';

const RecipeList = ({ recipes, setSelectedRecipe, deleteRecipe }) => {
    return (
        <>
            <h2>Recipes</h2>

        <div className="row mt-4">
            {recipes.length === 0 ? (
                <div className="col-12 mt-3">
                    <p>No recipes available.</p>
                </div>
            ) : (
                recipes.map(recipe => (
                    <div className="col-md-4 mb-3" key={recipe.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title border p-2 bg-dark text-light">{recipe.title}</h5>
                                <p className="card-text"><strong>Ingredients:</strong> {recipe.ingredients}</p>
                                <p className="card-text"><strong>Instructions:</strong> {recipe.instructions}</p>
                                <p className="card-text"><strong>Cuisine Type:</strong> {recipe.cuisineType}</p>
                                <p className="card-text"><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-dark btn-sm" onClick={() => setSelectedRecipe(recipe)} style={{background:"blue"}}>Edit</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
        </>

    );
};

export default RecipeList;
