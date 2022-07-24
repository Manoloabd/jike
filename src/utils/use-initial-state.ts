import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef } from 'react'
import type { RootState } from '@/types/store'
// 创建一个函数 use开头
// stateName不能写死类型
export const useInitialState  = <KeyName extends keyof RootState>(action: () => void , stateName: KeyName) => {
    const dispatch = useDispatch()
    // 需要使用useSelector得到对应的状态
   const state =  useSelector((state: RootState) => state[stateName])
   // 返回的是 当前子reducer的状态
     // 第一次传入进来，就会赋值给ref
  const actionRef = useRef(action) // 得到一个ref对象 current不会根据当前 的函数重复执行而发生任何变化
    useEffect(() => {
     // 派发action不同  此时 actionRef.current表示之前第一次赋值的函数
     dispatch(actionRef.current())
    }, [dispatch]) // 每次都创建了一个新的函数
    return state // 返回状态  此时会详细推导出 返回时的类型 
}