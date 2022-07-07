import { Button, NavBar, Form, Input, Toast } from 'antd-mobile'
import { login } from '@/store/actions/login'
import { LoginForm } from '@/types/data'
import { useDispatch } from 'react-redux'

import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'

const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const onFinish = async (values: LoginForm) => {
    // login()
    await dispatch(login(values)) // 触发登录的action  thunk
    // 此时表示分发action成功 登录成功
    // 跳转到主页
    Toast.show({
      content: '登录成功',
      duration: 500,
      afterClose: () => {
        history.replace('/home') // 调到主页
      },
    })
  }

  return (
    <div className={styles.root}>
      <NavBar></NavBar>

      <div className='login-form'>
        <h2 className='title'>账号登录</h2>

        <Form onFinish={onFinish}>
          {/* 1.手机号必填 2.校验手机号格式 */}
          <Form.Item
            name='mobile'
            validateTrigger='onBlur'
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误' },
            ]}
            className='login-item'
          >
            <Input placeholder='请输入手机号' />
          </Form.Item>
          {/* 1.验证码必填 2.校验验证码格式 */}
          <Form.Item
            name='code'
            validateTrigger='onBlur'
            rules={[
              { required: true, message: '请输入验证码' },
              { pattern: /^\d{6}$/, message: '验证码格式不正确' },
            ]}
            className='login-item'
            extra={<span className='code-extra'>发送验证码</span>}
          >
            <Input placeholder='请输入验证码' autoComplete='off' />
          </Form.Item>

          {/* noStyle 表示不提供 Form.Item 自带的样式 */}
          <Form.Item noStyle>
            <Button
              block
              type='submit'
              color='primary'
              className='login-submit'
            >
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
