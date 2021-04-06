import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Switch, Route} from "react-router-dom";
import FormCustom from './components/form'
import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {
  return (  

    <HashRouter>
{/* 
      <Switch>
        <Route exact path="/">    */}
        <Provider store={store}>             
          <FormCustom />   
        </Provider>          
        {/* </Route>
      </Switch> */}

    {/* //   <Switch>
    //     <Route exact path="/">                
    //       <Modal />           
    //     </Route>
    //   </Switch> */}


    </HashRouter>
  );
}


export default App;
