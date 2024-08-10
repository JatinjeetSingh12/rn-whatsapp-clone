import ChatScreenHeader from '@/components/chatScreen/ChatScreenHeader'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Page = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex:1,}}>
      <StatusBar barStyle={'dark-content'}  backgroundColor={'white'}/>
      <ChatScreenHeader />
    </SafeAreaView>
  )
}

export default Page