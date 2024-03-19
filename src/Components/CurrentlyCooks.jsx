
import PropTypes from 'prop-types';
import CurrentlyCook from './CurrentlyCook';

const CurrentlyCooks = (({addCooks}) => {
    
    return (
        <div className='mt-20'>
            <p className='text-2xl font-bold'>Currently Cooking <span className='bg-green-300 rounded-lg p-2'>{addCooks.length}</span></p>
            <div className='flex justify-around mt-5'>
                <p>Name</p>
                <p>Times</p>
                <p>Calories</p>
            </div>

            {
                addCooks.map((addCook, id=1)=><CurrentlyCook addCook={addCook} key={id}></CurrentlyCook>)
            }
            
        </div>
    );
});

CurrentlyCooks.propTypes = {
    addCooks: PropTypes.array
};

export default CurrentlyCooks;