import { Button, NavBar, Form, Input } from 'antd-mobile'

import styles from './index.module.scss'

const Login = () => {
  return (
    <div className={styles.root}>
      <NavBar></NavBar>

      <div className='login-form'>
        <h2 className='title'>账号登录</h2>

        <Form>
          {/* 1.手机号必填 2.校验手机号格式 */}
          <Form.Item
            name='mobile'
            validateTrigger='onBlur'
            rules={[
              { required: true, message: '请输入手机号' },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '手机号格式错误',
              },
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
