import { RootThunkAction } from '@/types/store'
import { http } from '@/utils/http'
import { UserResponse } from '@/types/data'
// 做异步请求


// redux 异步action
export const getUser = (): RootThunkAction => {
    return async dispatch => {
        // 实现数据的请求 得到的数据再进行分发
        const res = await http.get('/user') as UserResponse // 得到的是返回的结构
        // 直接dispatch 
        // dispatch({ }) 
        dispatch({ type: "user/getuser", payload: res.data  })  // 分发action

    }

}