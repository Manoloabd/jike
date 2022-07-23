import '@/App.scss'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import ProfileEdit from '@/pages/Profile/Edit'
import { customHistory } from './utils/history'
import AuthRoute from './components/AuthRoute'
import Article from './pages/Article'
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
          {/* 自定义鉴权路由 */}
          <AuthRoute path='/profile/edit'>
            <ProfileEdit></ProfileEdit>
          </AuthRoute>
        </Switch>
        {/* 文章详情 必须登录才能看？？？ 文章详情 只有回复评论时才需要登录 */}
        <Route path='/article/:articleId' component={Article}></Route>
      </div>
    </Router>
  )
}

export default App
