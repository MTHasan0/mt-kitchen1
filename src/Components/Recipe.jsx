
import PropTypes from 'prop-types';
import { IoIosTime } from "react-icons/io";
import { FaScaleUnbalanced } from "react-icons/fa6";

const Recipe = ({ recipe, handleWantCook }) => {

    const {recipe_image, recipe_name, short_description , preparing_time, calories } = recipe;
    
    return (
        <div className='mt-10'>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="lg:px-5 px-2 pt-10">
                    <img src={recipe_image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <h2 className="">{short_description}</h2>
                    <hr></hr>
                    <p >Ingredients: {recipe.ingredients.length}</p>
                    <hr></hr>
                    
                    
                    <div className='text-start'>
                    {
                        recipe.ingredients.map((item, id=1)=><p key={id}>{item}</p>)
                    }
                    </div>
                    <hr></hr>
                    <div className=' flex gap-5 items-center justify-between'>
                        <span className='flex items-center'><span className='text-green-600'><IoIosTime /></span> <p> {preparing_time}</p></span>
                        <span className='flex items-center'><span className='text-green-600'><FaScaleUnbalanced /></span> <p> {calories}</p></span>
                    </div>
                    <div className="card-actions mt-5">
                        <button onClick={()=>handleWantCook(recipe)} className="btn w-full text-black rounded-3xl bg-[#0be58a]">Want to Cook</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object,
    handleWantCook: PropTypes.func

};

export default Recipe;