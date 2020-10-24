import React from 'react';
import './App.css';
import Header from '../../components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import PopularMovies from '../../components/PopularMovies/PopularMovies';
import MovieDetails from '../../components/Movie/MovieDetails';

const App = (props) =>{

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={PopularMovies} />
        <Route patch="/movieDetails/:id" component={MovieDetails}/>
      </Switch>
    </div>
  );
}

export default App;
