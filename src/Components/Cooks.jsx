
import PropTypes from 'prop-types';
import Cook from './Cook';
import CurrentlyCooks from './CurrentlyCooks';


const Cooks = ({cooks, handleDelete, addCooks}) => {
    

    return (
        <div className='mt-10 border lg:w-1/3'>
            <p className='text-2xl font-semibold pt-4'>Want to Cook: <span className='bg-yellow-300 p-2 rounded-lg'>{cooks.length}</span></p>
            <div className='grid grid-cols-4 gap-4 mt-4'>
                <p>Name</p>
                <p>Times</p>
                <p>Calories</p>
                <p></p>
            </div>

            {
                cooks.map((cook, id=1)=>
                <Cook cook={cook} key={id}
                handleDelete={handleDelete}
                ></Cook>)
            }
            <CurrentlyCooks addCooks={addCooks}></CurrentlyCooks>
            
            
            
        </div>
    );
};

Cooks.propTypes = {
    cooks: PropTypes.array,
    handleDelete: PropTypes.func,
    addCooks: PropTypes.array
    
};

export default Cooks;