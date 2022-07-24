import { NavBar, InfiniteScroll } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import styles from './index.module.scss'

import Icon from '@/components/Icon'
import CommentItem from './components/CommentItem'
import CommentFooter from './components/CommentFooter'
import { useParams } from 'react-router-dom'
import { getArticleInfo } from '@/store/actions/article'
import { useInitialState } from '@/utils/use-initial-state'

import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import dompurify from 'dompurify'
dayjs.extend(LocalizedFormat) // 扩展转化方法
const Article = () => {
  const history = useHistory()
  const params = useParams<{ articleId: string }>()
  const { detail } = useInitialState(
    () => getArticleInfo(params.articleId),
    'article'
  )
  const loadMoreComments = async () => {
    console.log('加载更多评论')
  }
  const {
    title,
    read_count,
    like_count,
    comm_count,
    pubdate,
    aut_name,
    aut_photo,
    is_followed,
    content,
  } = detail
  const renderArticle = () => {
    // 文章详情
    return (
      <div className='wrapper'>
        <div className='article-wrapper'>
          <div className='header'>
            <h1 className='title'>{title}</h1>

            <div className='info'>
              {/* 转化成专用格式 */}
              <span>{dayjs(pubdate).format('LL')}</span>
              <span>{read_count} 阅读</span>
              <span>{comm_count} 评论</span>
            </div>

            <div className='author'>
              <img src={aut_photo} alt='' />
              <span className='name'>{aut_name}</span>
              <span
                className={classNames('follow', is_followed ? 'followed' : '')}
              >
                {is_followed ? '已关注' : '关注'}
              </span>
            </div>
          </div>

          <div className='content'>
            <div
              className='content-html dg-html'
              dangerouslySetInnerHTML={{ __html: dompurify.sanitize(content) }}
            />
            <div className='date'>
              发布文章时间：{dayjs(pubdate).format('LL')}
            </div>
          </div>
        </div>

        <div className='comment'>
          <div className='comment-header'>
            <span>全部评论（{comm_count}）</span>
            <span>{like_count} 点赞</span>
          </div>

          <div className='comment-list'>
            <CommentItem />

            <InfiniteScroll hasMore={false} loadMore={loadMoreComments} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <div className='root-wrapper'>
        <NavBar
          onBack={() => history.go(-1)}
          right={
            <span>
              <Icon type='icongengduo' />
            </span>
          }
        >
          {true && (
            <div className='nav-author'>
              <img src='http://geek.itheima.net/images/user_head.jpg' alt='' />
              <span className='name'>黑马先锋</span>
              <span className={classNames('follow', true ? 'followed' : '')}>
                {true ? '已关注' : '关注'}
              </span>
            </div>
          )}
        </NavBar>
        {/* 文章详情和评论 */}
        {renderArticle()}

        {/* 底部评论栏 */}
        <CommentFooter />
      </div>
    </div>
  )
}

export default Article
