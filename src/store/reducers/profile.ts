import type { User } from "@/types/data"
import type { UserAction } from '@/types/store'
type UsetState = {
    user: User
}

const inititalState: UsetState = {
   user: {},  // 表示类型User类型数据
}  as UsetState   // 类型断言是主观判断  断言开发者主观认为它是一种确定的类型 ！非空断言  屏蔽ts的提示错误

// 个人中心的reducer 里面存储相关的资料
export default function profile (state = inititalState, action: UserAction):UsetState  {
    switch (action.type) {
        case "user/getuser":
            return  {...state, user: action.payload}  // 相当于覆盖用户信息数据
        default:
            return  state

    }
}