import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/nav.component';
import Trending from './routes/trending/trending.component';
import Recent from './routes/recent/recent.component';
import Hot from './routes/hot/hot.component';
import Favorite from './routes/favorite/favorite.component';
import Categories from './routes/categories/categories.component';
import { List } from './components/recipe/recipe.component';


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='trending' element={<Trending />}/>
        <Route path='recent' element={<Recent/>}/>
        <Route path='hot' element={<Hot/>}/>
        <Route path='favorite' element={<Favorite/>}/>
        <Route path='categories' element={<Categories/>}/>
        <Route path='list' element={<List />}/>
      </Route>
    </Routes>
  )
}