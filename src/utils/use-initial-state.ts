
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import type { RootState } from '@/types/store'
// 创建一个函数 use开头
// stateName不能写死类型
export const useInitialState  = <KeyName extends keyof RootState>(action: () => void , stateName: KeyName) => {
    const dispatch = useDispatch()
    // 需要使用useSelector得到对应的状态
   const state =  useSelector((state: RootState) => state[stateName])
   // 返回的是 当前子reducer的状态
    useEffect(() => {
        dispatch(action())// eslint-disable-next-line
    }, [])
    return state  // 返回状态
}