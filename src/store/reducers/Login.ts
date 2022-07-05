//reducer函数 根据输入的类型参数 返回特定的结果
import { Token } from '@/types/data'
import { LoginAction } from '@/types/store';
const initialState: Token =  {
    token: "",
    refresh_token:""
}

export default function Login(state = initialState, action:LoginAction):Token {
    switch (action.type) {
        case "login/token":
            return action.payload
        default:
            return state
    }
}
