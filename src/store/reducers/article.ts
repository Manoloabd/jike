import { ArticleInfo } from "@/types/data"
import { articleAction } from "@/types/store"

type articleState = {
    detail:ArticleInfo
}

const inititalState = {
    detail: {}
} as articleState

export default function article (state = inititalState, action:articleAction):articleState {
    switch (action.type) {
        case 'article/get':
            return {...state, detail:action.payload}
        default:
            return state;
    }
}