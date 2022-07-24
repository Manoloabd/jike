// 导入request请求工具类
import { getBaseUrl, requestUtil } from '../../utils/requestUtil.js'

const QQMapWX = require('../../lib/qqmap-wx-jssdk.min.js')
var qqmapsdk
const position = []
Page({
  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude: 0,
    baseUrl: '',
    productObj: {},
    locationlist: [],
    location: [],
    bigTypeList: [],
    tolatitude: '',
    tolongitude: '',
    markers: [
      {
        id: 1,
        title: position.name,
        latitude: getProductDetail(1).result.latitude,
        longitude: 119.790126,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  mapContext: null,
  qqmapsdk: null,

  onLoad(options) {
    const baseUrl = getBaseUrl()
    this.setData({
      baseUrl,
    })
    this.initMapSdk()
    this.loadCurrentLocation()
    this.initMapContext()
    this.getProductDetail(options.id)
  },

  initMapSdk() {
    this.mapSdk = new QQMapWX({
      key: 'UQFBZ-MBA36-54MSN-MIHFJ-QS7WH-T6BOD',
    })
  },

  initMapContext() {
    wx.createSelectorQuery()
      .select('#map')
      .context((res) => {
        this.mapContext = res.context
      })
      .exec()
  },

  loadCurrentLocation() {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        this.setData({
          latitude,
          longitude,
        })
        console.log(latitude, longitude)
      },
    })
  },

  async getProductDetail(id) {
    const result = await requestUtil({
      url: '/product/detail',
      data: { id },
      method: 'GET',
    })
    this.productInfo = result.message
    this.setData({
      productObj: result.message,
    })
    return (
      (position = result.message),
      console.log(result.message.latitude, result.message.longitude),
      console.log(result.message, 11111),
      this.setData({
        title: result.message.name,
        tolatitude: result.message.latitude,
        tolongitude: result.message.longitude,
      })
    )
  },

  goToCurrentLocation() {
    this.mapContext.moveToLocation()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
})
