import React, { useState, useEffect } from 'react';

const RecipeForm = ({ addRecipe, editRecipe, selectedRecipe }) => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [cookingTime, setCookingTime] = useState('');

    useEffect(() => {
        if (selectedRecipe) {
            setTitle(selectedRecipe.title);
            setIngredients(selectedRecipe.ingredients);
            setInstructions(selectedRecipe.instructions);
            setCuisineType(selectedRecipe.cuisineType);
            setCookingTime(selectedRecipe.cookingTime);
        } else {
            clearForm();
        }
    }, [selectedRecipe]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const recipe = {
            id: selectedRecipe ? selectedRecipe.id : Date.now(),
            title,
            ingredients,
            instructions,
            cuisineType,
            cookingTime
        };

        if (selectedRecipe) {
            editRecipe(recipe);
        } else {
            addRecipe(recipe);
        }
        clearForm();
    };

    const clearForm = () => {
        setTitle('');
        setIngredients('');
        setInstructions('');
        setCuisineType('');
        setCookingTime('');
    };

    return (
        <div className="container mt-3 ">
            <div className="row">
                <div className="col-lg-6 mx-auto border-dark shadow p-4 " style={{ background: '#fff' }}>
                    <h2>{selectedRecipe ? 'Edit Recipe' : 'Add Recipe'}</h2>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Title" 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <textarea 
                                className="form-control" 
                                placeholder="Ingredients" 
                                value={ingredients} 
                                onChange={(e) => setIngredients(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <textarea 
                                className="form-control" 
                                placeholder="Instructions" 
                                value={instructions} 
                                onChange={(e) => setInstructions(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Cuisine Type" 
                                value={cuisineType} 
                                onChange={(e) => setCuisineType(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Cooking Time (minutes)" 
                                value={cookingTime} 
                                onChange={(e) => setCookingTime(e.target.value)} 
                                required 
                            />
                        </div>
                        <button type="submit" className="mt-2 text-light btn border w-100" style={{background:"green"}}>
                            {selectedRecipe ? 'Update Recipe' : 'Add Recipe'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RecipeForm;
