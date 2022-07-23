import { RootThunkAction } from "@/types/store"
import { http } from "@/utils/http"
import { ArticleInfoResponse } from "@/types/data"

export const getArticleInfo = (articleId:string):RootThunkAction => {
    return async (dispatch) => {
       const res =  await http.get(`/articles/${articleId}`) as ArticleInfoResponse
        return dispatch({type:'article/get', payload:res.data})
    }
}