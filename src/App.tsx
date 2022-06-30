import '@/App.scss'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <Redirect to='/home'></Redirect>}
          ></Route>
          <Route path='/home' component={Layout}></Route>
          <Route path='/login' component={Login}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
