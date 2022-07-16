import { Button, List, DatePicker, NavBar, Popup } from 'antd-mobile'
import classNames from 'classnames'
import { useHistory } from 'react-router-dom'
import styles from './index.module.scss'
import { getUserProfile } from '@/store/actions/profile'
import { useInitialState } from '@/utils/use-initial-state'
import EditInput from './components/EditInput'
const Item = List.Item

const ProfileEdit = () => {
  const history = useHistory()
  const { profile: UserProfile } = useInitialState(getUserProfile, 'profile')
  return (
    <div className={styles.root}>
      <div className='content'>
        {/* 标题 */}
        <NavBar
          onBack={() => history.goBack()}
          style={{
            '--border-bottom': '1px solid #F0F0F0',
          }}
        >
          个人信息
        </NavBar>

        <div className='wrapper'>
          {/* 列表 */}
          <List className='profile-list'>
            {/* 列表项 */}
            <Item
              extra={
                <span className='avatar-wrapper'>
                  <img width={24} height={24} src={UserProfile.photo} alt='' />
                </span>
              }
              arrow
            >
              头像
            </Item>
            <Item arrow extra={UserProfile.name}>
              昵称
            </Item>
            <Item
              arrow
              extra={
                <span className={classNames('intro', 'normal')}>
                  {UserProfile.intro || '未填写'}
                </span>
              }
            >
              简介
            </Item>
          </List>

          <List className='profile-list'>
            <Item arrow extra={UserProfile.gender === 0 ? '男' : '女'}>
              性别
            </Item>
            <Item arrow extra={UserProfile.birthday}>
              生日
            </Item>
          </List>

          <DatePicker
            visible={false}
            value={new Date()}
            title='选择年月日'
            min={new Date(1900, 0, 1, 0, 0, 0)}
            max={new Date()}
          />
        </div>

        <div className='logout'>
          <Button className='btn'>退出登录</Button>
        </div>
      </div>
      <Popup visible position='right'>
        <EditInput></EditInput>
      </Popup>
    </div>
  )
}

export default ProfileEdit
