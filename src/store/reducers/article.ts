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
        default:
            return state;
    }
}