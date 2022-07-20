import { RootThunkAction } from "@/types/store"
import { http } from "@/utils/http"
import { UserChannelResponse, Channel } from "@/types/data"
export const getUserChannel = (): RootThunkAction => {
    const Channel_Key = 'geek-channels-138'
    return async (dispatch, getState) => {
        const { login: { token }} = getState()
        if (!!token) {
            //表示有token 是登录状态
        const {data:{channels}} = await http.get('/user/channels') as UserChannelResponse
            console.log(channels);
            
        } else {
            //未登录状态
            const localChannels = JSON.parse(
                localStorage.getItem(Channel_Key) ?? '[]'
            ) as Channel[]
            if (localChannels.length > 0) {
                console.log("未登录本地有缓存", localChannels);
            } else {
                const {data:{channels}} = await http.get('/user/channels') as UserChannelResponse
                // 此时此刻 拿到的channels是用户默认的数据
                localStorage.setItem(Channel_Key, JSON.stringify(channels)) // 写入前端缓存
                console.log("写入前端缓存", channels)
            }
        }
    }
}