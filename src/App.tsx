import '@/App.scss'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import ProfileEdit from '@/pages/Profile/Edit'
import { customHistory } from './utils/history'

function App() {
  return (
    <Router history={customHistory}>
      <div className='app'>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <Redirect to='/home'></Redirect>}
          ></Route>
          <Route path='/home' component={Layout}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/profile/edit' component={ProfileEdit}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
