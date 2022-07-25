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
import { useEffect } from 'react'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import dompurify from 'dompurify'
import highlight from 'highlight.js'
import ContentLoader from 'react-content-loader'
import 'highlight.js/styles/vs2015.css'
// 还需要引入highlight样式包
dayjs.extend(LocalizedFormat) // 扩展转化方法
const Article = () => {
  const history = useHistory()
  const params = useParams<{ articleId: string }>()
  const { detail } = useInitialState(
    () => getArticleInfo(params.articleId),
    'article'
  )
  highlight.configure({
    ignoreUnescapedHTML: true,
  })
  const loadMoreComments = async () => {
    console.log('加载更多评论')
  }
  useEffect(() => {
    if (detail.art_id) {
      // 说明此时已经加载过文章详情了
      // 通过dom寻找所有的 带pre code的节点
      const dgHtmlDom = document.querySelector('.dg-html') // 获取对应的文本内容的dom
      const codeList = dgHtmlDom?.querySelectorAll<HTMLElement>('pre code') // 确定要找的是HtmlElement
      // 得到一个列表 有可能为空
      if (codeList && codeList.length > 0) {
        // 此时此刻表示 找到了 代码块
        // 需要使用 highlight让每个代码块高亮
        codeList.forEach((item) => {
          // 使用highlight
          highlight.highlightElement(item)
        })
      }
    }
  }, [detail])

  const showLoader = () => (
    <ContentLoader
      speed={2}
      width={400}
      height={360}
      viewBox='0 0 400 360'
      backgroundColor='#d56c6c'
      foregroundColor='#ecebeb'
    >
      <rect x='59' y='123' rx='3' ry='3' width='88' height='6' />
      <rect x='163' y='124' rx='3' ry='3' width='52' height='6' />
      <rect x='12' y='221' rx='3' ry='3' width='410' height='6' />
      <rect x='11' y='176' rx='3' ry='3' width='388' height='6' />
      <rect x='27' y='67' rx='3' ry='3' width='178' height='6' />
      <circle cx='30' cy='122' r='20' />
      <rect x='14' y='265' rx='0' ry='0' width='387' height='7' />
    </ContentLoader>
  )
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
  if (!detail.art_id) {
    // 如果当前没有id 表示表示加载数据 显示骨架屏
    return showLoader()
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
