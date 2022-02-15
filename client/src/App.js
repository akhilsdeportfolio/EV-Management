import SignupForm from './components/SignupForm';
import { Gallery } from './components/Gallery';
import {SearchResults} from './components/SearchResults'

import { Home } from './components/Home';
import { Route, Switch} from "react-router-dom";

import './App.css';

import AllReviews from './components/AllReviews';


import Raise1 from './components/Raise1';
import Raise2 from './components/Raise2';


import LoginForm from './components/LoginForm';
 import ProductDetails from './components/ProductDetails'; 

import Raise4 from './components/Raise4';
import Raise5 from './components/Raise5';
import About from './components/About';

import { NewsSection } from './components/NewsSection';
import Evehicles from './components/Evehicles';
import Article from './components/Article';

 


function App() {

  return (
    <>

       <Switch>
        <Route path="/raise1" ><Raise1></Raise1></Route>
        <Route path="/raise2"><Raise2/></Route>
        <Route path="/raise4"><Raise4/></Route>
        <Route path="/raise5"><Raise5/></Route>
        <Route path="/about"> <About></About> </Route>
        <Route exact path='/Vehicles/:id' component={ProductDetails} />
        <Route exact path='/Gallery/:id' component={Gallery} />
        <Route exact path='/Reviews/:id' component={AllReviews} />        
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Login' component={LoginForm} />
        <Route exact path='/signup' component={SignupForm} />
        <Route exact path='/News' component={NewsSection} />
        <Route exact path='/News/:id' component={Article} />
        <Route exact path='/Vehicles/' component={Evehicles} />
        <Route exact path='/' component={Home} />
        <Route exact path='/Search' component={SearchResults} />
       </Switch> 
            </>
  ); 
}

export default App;
