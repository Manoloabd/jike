// 新建详情的action
import { RootThunkAction } from "@/types/store"
import { http } from "@/utils/http"
import { ArticleCommentResponse, ArticleInfoResponse, AddArticleResposnse } from "@/types/data"

// 获取文章详情
export const getArticleInfo = (articleId: string): RootThunkAction => {
  return async (dispatch) => {
    // redux-thunk-action
    // http发起请求
    // http
    const res = (await http.get(`/articles/${articleId}`)) as ArticleInfoResponse // 强制转化
    // 得到res之后，分发reducer
    dispatch({ type: "article/get", payload: res.data })
  }
}

// 定义获取评论的action
export const getCommments = (type:string, sourse:string, offset:string | null, actionType: 'append' | 'replace'): RootThunkAction => {
  return async (dispatch) => {
  const res = await http.get('/comments', {
      params: {
        type,
        sourse,
        offset
      }
  }) as ArticleCommentResponse
    dispatch({type:'article/getArticleComments', payload:{...res.data,actionType}})
  } 
}
export const AddArticleComment = (target:string, content:string): RootThunkAction => {
  return async dispatch => {
    const res = await http.post('/comments', {
      target,
      content
    }) as AddArticleResposnse
    dispatch({ type: "article/addArticleComment", payload: res.data.new_obj })
  } 
  // dispatchEvent({type})
  
}