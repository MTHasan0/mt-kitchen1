
import PropTypes from 'prop-types';

const CurrentlyCook = (({ addCook }) => {

    const {recipe_name, preparing_time, calories } = addCook;


    return (
        <div>
            <ol className='grid grid-cols-3 bg-slate-200 my-2 py-3 h-20  items-center rounded-lg m-2 p-4'>
                <li>{recipe_name}</li>
                <li>{preparing_time}</li>
                <li>{calories}</li>
            </ol>


        </div>
    );
});

CurrentlyCook.propTypes = {
    addCook: PropTypes.object
};

export default CurrentlyCook;