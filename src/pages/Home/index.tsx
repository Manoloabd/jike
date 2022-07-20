import Icon from '@/components/Icon'
import { Tabs } from 'antd-mobile'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.root}>
      {/* 频道 Tabs 列表 */}
      <Tabs className='tabs' activeLineMode='fixed'>
        <Tabs.Tab title='推荐' key='1'>
          tuijian
        </Tabs.Tab>
        <Tabs.Tab title='HTML' key='2'>
          HTml
        </Tabs.Tab>
        <Tabs.Tab title='开发者资讯' key='3'>
          开发者资讯
        </Tabs.Tab>
        <Tabs.Tab title='C++' key='4'>
          C++
        </Tabs.Tab>
      </Tabs>
      <div className='tabs-opration'>
        <Icon type='iconbtn_search' />
        <Icon type='iconbtn_channel' />
      </div>
    </div>
  )
}

export default Home
