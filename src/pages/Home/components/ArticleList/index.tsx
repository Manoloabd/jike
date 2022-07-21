import ArticleItem from '@/components/ArticleItem'
import { InfiniteScroll } from 'antd-mobile'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getArticleList } from '@/store/actions/home'
import styles from './index.module.scss'
type Props = {
  channelId: number
}
const ArticleList = ({ channelId }: Props) => {
  const dispatch = useDispatch()
  const [hasMore] = useState(true)
  const loadMore = async () => {
    await dispatch(getArticleList(channelId, Date.now().toString()))
  }
  return (
    <div className={styles.root}>
      {/* 文章列表中的每一项 */}
      <div className='article-item'>
        <ArticleItem type={1} />
        <InfiniteScroll hasMore={hasMore} loadMore={loadMore}></InfiniteScroll>
      </div>
    </div>
  )
}

export default ArticleList
