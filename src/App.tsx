import '@/App.scss'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import ProfileEdit from '@/pages/Profile/Edit'
import { customHistory } from './utils/history'
import AuthRoute from './components/AuthRoute'
function App() {
  return (
    <Router history={customHistory}>
      <div className='app'>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <Redirect to='/home/index'></Redirect>}
          ></Route>
          {/* <Route path='/home' component={Layout}></Route> */}
          <Route path='/home' component={Layout}></Route>
          <Route path='/login' component={Login}></Route>
          <AuthRoute path='/profile/edit'>
            <ProfileEdit></ProfileEdit>
          </AuthRoute>
        </Switch>
      </div>
    </Router>
  )
}

export default App
