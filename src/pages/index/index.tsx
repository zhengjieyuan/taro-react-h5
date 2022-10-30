import { Component, PropsWithChildren } from 'react'
import { View, Text,Button } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro';

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  qrCodeScan(){
    Taro.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={()=>this.qrCodeScan()}>扫码</Button>
      </View>
    )
  }
}
