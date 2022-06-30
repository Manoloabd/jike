//处理redux相关的类型
import store from '@/store'
import Token from './data'
import {ThunkAction} from 'redux-thunk'

export type RootState = ReturnType<typeof store.getState>

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export type RootAction = LoginAction  //所有action类型的集合

export type LoginAction = {
    type: 'login/token',
    payload: Token
}
