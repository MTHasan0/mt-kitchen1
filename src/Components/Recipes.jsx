
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';





const Recipes = ({handleWantCook}) => {
    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);


    return (
        <div className=''>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                {

                    recipes.map(recipe => <Recipe key={recipe.recipe_id} recipe={recipe} handleWantCook={handleWantCook}></Recipe>)
                }

            </div>
        </div>
    );
}

Recipes.propTypes = {
    handleWantCook: PropTypes.func.isRequired

};

export default Recipes;