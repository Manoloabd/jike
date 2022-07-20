//处理redux相关的类型
import store from '@/store'
import { ThunkAction } from 'redux-thunk'
import type { Token, User, UserProfile, Channel} from './data'

export type RootState = ReturnType<typeof store.getState>

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export type RootAction = LoginAction | UserAction | HomeAction//所有action类型的集合

export type LoginAction = | {
    type: 'login/token',
    payload: Token
} | {
    type: 'login/logout'
}

export type UserAction = {
    type: 'user/getuser',
    payload: User
} | {
    type: 'user/getprofile',
    payload: UserProfile
} | {
    type: 'user/updata',
    payload:Partial<UserProfile>
}

export type HomeAction = {
    type: 'home/getUserChannel',
    payload:Channel[]
}