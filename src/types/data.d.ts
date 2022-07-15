//处理数据结构

//定义登录/注册接口返回的数据类型
export type Token = {
    token: string,
    refresh_token:string
}
 
//定义一个提交表单的类型
export type LoginForm = {
    mobile: string,
    code: string
}

//定义一个登录接口返回的数据结构
export type LoginResponse = {
    message: string,
    data: Token
}
//用户类型
export type User = {
    id: string,
    name: string,
    photo: string,
    intro: string,
    art_count: number,
    follow_count: number,
    fans_count: number,
    like_count: number
}

export type UserResponse = {
    message: string,
    data: User

}