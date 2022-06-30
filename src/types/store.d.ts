//处理redux相关的类型
import store from '@/store'
import {ThunkAction} from 'redux-thunk'

export type RootState = ReturnType<typeof store.getState>

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export type RootAction = any  //所有action类型的集合
