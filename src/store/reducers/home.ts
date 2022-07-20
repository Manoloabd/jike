import { HomeAction } from "@/types/store"
import { Channel } from "@/types/data"

type HomeState = {
  userChannels: Channel[]
}
const inititalState: HomeState = {
  // 表示首页数据的初始状态
  userChannels: [], // 一开始 用户频道是空数组
}

export default function Home(
  state = inititalState,
  action: HomeAction
): HomeState {
  switch (action.type) {
    case "home/getUserChannel":
      // 更新用户频道数据
      return { ...state, userChannels: action.payload }
    default:
      return state
  }
}