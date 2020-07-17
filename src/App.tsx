import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodosPage } from './pages/todosPage';
import { AboutPage } from './pages/aboutPage';
import './css/app.css';

const App: React.FC = () => { 
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
          <Switch>
            <Route component={TodosPage} path='/' exact />
            <Route component={AboutPage} path='/about' />          
          </Switch>           
        </React.Fragment>    
    </BrowserRouter>
      
  )
}

export default App;
