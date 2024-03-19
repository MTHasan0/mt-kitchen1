import { useState } from 'react'
import './App.css'
import './index.css'
import Header from './Components/Header'
import Banner from './Components/Banner'
import Recipes from './Components/Recipes'
import Cooks from './Components/Cooks'
import RecipesTitle from './Components/RecipesTitle'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const notify = () => toast("Already added this item");
  const [cooks, setCooks] = useState([]);

  const [addCooks, setAddCooks] = useState([]);

  




  const handleWantCook = (recipes) => {


    const newCooks = cooks.find(item => item.recipe_id == recipes.recipe_id);

    if (!newCooks) {
      setCooks([...cooks, recipes]);

    } else {
      notify();
    }

  }

  const handleDelete = (items) => {
    
    const newItems = cooks.filter(item => item.recipe_id != items);
    setCooks(newItems);
    handleAddCurrentCook(items)

  }

  const handleAddCurrentCook = (items) => {
    const addCook = cooks.find(item=>item.recipe_id==items);
    setAddCooks([...addCooks, addCook]);

    

    

  }



  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <RecipesTitle></RecipesTitle>
      <div className='lg:flex lg:justify-around gap-4'>
        <Recipes handleWantCook={handleWantCook}></Recipes>
        <Cooks className='border'
          cooks={cooks}
          handleDelete={handleDelete}
          addCooks={addCooks}
        ></Cooks>
        <ToastContainer />


      </div>


    </>
  )
}

export default App
