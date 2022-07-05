import { LoginForm, LoginResponse } from "@/types/data"
import { RootThunkAction } from "@/types/store"
import { http } from "@/utils/http"
import { setToken } from "@/utils/auth"

export const login = (loginParams: LoginForm): RootThunkAction => {
    return async dispatch => {
        const res = await http.post('/authorizations', loginParams) as LoginResponse
        setToken(res.data)
        dispatch({type:'login/token', payload: res.data})
    }
}