import { View, Text ,} from 'react-native'
import React,{PropsWithChildren} from 'react'

const MessageDummy = ({children}:PropsWithChildren) => {
  return (
    <View>
        {children}
    </View>
  )
}

export default MessageDummy