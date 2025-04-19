import React, { useState } from 'react'
import { StyleProp, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import InputStyle from './Input.style'

export default function Input({ Icon, ...props }: {
    ViewStyle?: StyleProp<ViewStyle>,
    Icon?: React.ReactNode
} & TextInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={[InputStyle.ViewInput, props.style, isFocused ? InputStyle.ViewInputFocus : null]}>
            <TextInput
                style={[InputStyle.input]}
                onFocus={() => {
                    setIsFocused(true)
                }}
                onBlur={() => {
                    setIsFocused(false)
                }}
                {...props}
            />
            {Icon && Icon}
        </View>
    )
}
