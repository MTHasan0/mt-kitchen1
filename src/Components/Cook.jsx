import PropTypes from 'prop-types';
const Cook = ({ cook, handleDelete }) => {
    const { recipe_name, preparing_time, calories, recipe_id } = cook;






    return (
        <div>

            <div className="grid grid-cols-4 bg-slate-200 my-2 py-3 p-2 m-2 justify-around items-center rounded-lg">

                <p>{recipe_name}</p>
                <p>{preparing_time}</p>
                <p>{calories}</p>
                <button onClick={() => handleDelete(recipe_id)} className="btn  bg-[#0be58a] rounded-3xl">Preparing</button>
            </div>





        </div>
    );
};

Cook.propTypes = {
    cook: PropTypes.object,
    handleDelete: PropTypes.func
}

export default Cook;






