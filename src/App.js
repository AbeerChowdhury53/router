import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Friend from './component/Friend/Friend';
import About from './component/About/About';
import NotFound from './component/NotFound/NotFound';
import Frienddetails from './component/Frienddetails/Frienddetails';


function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Switch>

     <Route path='/friend'>
       <Friend></Friend>
       </Route>
       <Route path='/home'>
       <Home></Home>
       </Route>
       
       <Route exact path='/friend'>
       <Friend></Friend>
       </Route>
       <Route exact path='/frnd/:friendId'>
       <Frienddetails></Frienddetails>
       </Route>
       <Route path='/about'>
       <About></About>
       </Route>
       <Route exact path='/'>
       <Home></Home>
       </Route>
       <Route>
       <NotFound></NotFound>
       </Route>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
