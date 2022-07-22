import ArticleItem from '@/components/ArticleItem'
import { InfiniteScroll } from 'antd-mobile'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleList } from '@/store/actions/home'
import styles from './index.module.scss'
import { RootState } from '@/types/store'
type Props = {
  channelId: number
}
const ArticleList = ({ channelId }: Props) => {
  const dispatch = useDispatch()
  const [hasMore] = useState(true)
  const articles = useSelector((state: RootState) => state.home.channelArticles)
  // 此时要取 对应的频道下的文章数据
  const { results } = articles[channelId] ?? {
    results: [],
  } // 此时可以保证results至少是一个空数组
  const loadMore = async () => {
    await dispatch(getArticleList(channelId, Date.now().toString()))
  }
  return (
    <div className={styles.root}>
      {/* 文章列表中的每一项 */}
      <div className='article-item'>
        {results.map((item) => {
          return <ArticleItem {...item} />
        })}
        <InfiniteScroll hasMore={hasMore} loadMore={loadMore}></InfiniteScroll>
      </div>
    </div>
  )
}

export default ArticleList
