import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

interface IProps {
}

export default class Calendar extends Component<IProps, {}> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Calender</Text>
            </View>
        )
    }
}