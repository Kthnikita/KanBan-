import { Provider } from 'react-redux'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import store from './components/store'
function App() {

  return (
    <div>
     <Provider store={store}>
       <Navbar/>
       <Dashboard/>
     </Provider>
   </div>
  )
}

export default App
