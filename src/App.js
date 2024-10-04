import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import Header from './components/Header'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './app.css';

const App = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        const storedRecipes = localStorage.getItem('recipes');
        if (storedRecipes) {
            setRecipes(JSON.parse(storedRecipes));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }, [recipes]);

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
        toast.success("Recipe added successfully!");
    };

    const editRecipe = (updatedRecipe) => {
        setRecipes(recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
        setSelectedRecipe(null);
        toast.info("Recipe updated successfully!");
    };

    const deleteRecipe = (id) => {
        if (recipes.length <= 0) {
            toast.warn("You must have at least 3 recipes.");
            return;
        }
        setRecipes(recipes.filter(recipe => recipe.id !== id));
        setSelectedRecipe(null);
        toast.error("Recipe deleted successfully!");
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        recipe.cuisineType.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header />  {/* Render the Header at the top of the page */}
            <div className="container">
                <RecipeForm addRecipe={addRecipe} editRecipe={editRecipe} selectedRecipe={selectedRecipe} />
                
                <div className="mt-4">
                    <input 
                        type="text" 
                        className="form-control mb-3" 
                        placeholder="Search by title or cuisine type..." 
                        value={searchQuery} 
                        onChange={handleSearchChange}
                    />
                </div>

                <RecipeList 
                    recipes={filteredRecipes} 
                    setSelectedRecipe={setSelectedRecipe} 
                    deleteRecipe={deleteRecipe} 
                />

                {/* Toast Container to display notifications */}
                <ToastContainer position="top-right" autoClose={1000} />
            </div>
        </div>
    );
};

export default App;
