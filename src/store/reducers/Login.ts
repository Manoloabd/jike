//reducer函数 根据输入的类型参数 返回特定的结果
import {Token} from '@/types/data'
const initialState: Token =  {
    token: "",
    refresh_token:""
}

export default function Login(state = initialState, actions:any) {
    return state;
}
