import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GalleryView from '../presentation/GalleryView';
import ContactView from '../presentation/ContactView';


const MainRouter = () => (
    <BrowserRouter>
      <Switch>
            <Route exact path='/' component={GalleryView}/>
            <Route path='/contact' component={ContactView}/>
        </Switch>
    </BrowserRouter>
  );
  


  
  export default MainRouter;