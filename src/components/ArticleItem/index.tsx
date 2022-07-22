import classnames from 'classnames'

import Icon from '@/components/Icon'

import styles from './index.module.scss'

type Props = {
  /**
   * 0 表示无图
   * 1 表示单图
   * 3 表示三图
   */
  art_id: string
  title: string
  aut_id: string
  aut_name: string
  comm_count: number // 评论数量
  pubdate: string
  cover: {
    type: number
    images: string[]
  }
}

const ArticleItem = ({
  cover,
  title,
  aut_name,
  comm_count,
  pubdate,
}: Props) => {
  return (
    <div className={styles.root}>
      <div
        className={classnames(
          'article-content',
          cover.type === 3 && 't3',
          cover.type === 0 && 'none-mt'
        )}
      >
        <h3>{title}</h3>
        {cover.type !== 0 && (
          <div className='article-imgs'>
            {/*在这里渲染图片的封面 */}
            {cover.images.map((item, index) => {
              return (
                <div className='article-img-wrapper' key={index}>
                  <img src={item} alt='' />
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div
        className={classnames('article-info', cover.type === 0 && 'none-mt')}
      >
        <span>{aut_name}</span>
        <span>{comm_count} 评论</span>
        <span>{pubdate}</span>
        <span className='close'>
          <Icon type='iconbtn_essay_close' />
        </span>
      </div>
    </div>
  )
}

export default ArticleItem
