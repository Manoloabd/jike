import { ArticleComment, ArticleInfo } from "@/types/data"
import { articleAction } from "@/types/store"

type articleState = {
    detail: ArticleInfo
    comment:ArticleComment
}

const inititalState = {
    detail: {},
    comment: {
        results:[] as ArticleComment['results'],
    },
} as articleState

export default function article (state = inititalState, action:articleAction):articleState {
    switch (action.type) {
        case 'article/get':
            return { ...state, detail: action.payload }
        case 'article/getArticleComments':
            const {total_count, last_id, end_id, results, actionType} = action.payload
            return {
                ...state,
                comment: {
                    total_count,
                    last_id,
                    end_id,
                    results: actionType === 'append' ? [...state.comment.results,...results] : [...results]
                },
            }
        case 'article/addArticleComment':
            // 只要走到这个位置 就可以确定 总评论数 多了1条
      return {
        ...state,
        comment: {
          ...state.comment,
          total_count: state.comment.total_count + 1, // 总数+1
          results: [action.payload, ...state.comment.results], // 评论列表
          // 直接在评论列表头部加一条记录即可
        },
      }
        default:
            return state;
    }
}