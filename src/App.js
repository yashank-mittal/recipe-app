import React,{useEffect,useState} from 'react';
import Recepie from './receipe';
import "./App.css";
import dotenv from 'dotenv';

dotenv.config();

export default function App() {

  const App_id = "b4709e68";
  const App_key = "7ffa765ba3c91db843010e2531f63f3c";
  
  const [receipes,setreceipes] = useState([]);
  const [search,setsearch] = useState('');
  const [query,setQuery] = useState('dal');

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async()=>{
      const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`);
      const data = await response.json();
      setreceipes(data.hits);
      console.log(data.hits)
  }

  const updatesearch = e => {
    setsearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setsearch('');    
  }

  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updatesearch} />
            <button className="search-button" type="submit">Search</button>
        </form>
        <div className="recepies">
            {receipes.map(receipe => (
              <Recepie title={receipe.recipe.label} cuisinetype={receipe.recipe.cuisineType} images={receipe.recipe.image} ingredients={receipe.recipe.ingredients} />
            ))}
        </div>
    </div>
  )
}

