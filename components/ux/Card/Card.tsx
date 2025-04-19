import React from 'react'
import { View, ViewProps } from 'react-native'
import CardStyle from './Card.style'


export default function Card({ children, ...props }: { children: React.ReactNode } & ViewProps) {
    return (
        <View
            {...props}
            style={[CardStyle.ViewCard, props.style]}
        >
            {children}
        </View>
    )
}
