
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import type { RootState } from '@/types/store'
// 创建一个函数 use开头
export const useInitialState  = (action: any, stateName: 'login' | 'profile') => {
    const dispatch = useDispatch()
    // 需要使用useSelector得到对应的状态
   const state =  useSelector((state: RootState) => state[stateName])
   // 返回的是 当前子reducer的状态
    useEffect(() => {
        // 派发action不同
        dispatch(action())
    }, [])
    return state  // 返回状态
}