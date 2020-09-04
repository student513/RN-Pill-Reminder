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
                <Text style={{ fontFamily: 'ProximaNova-Regular' }}>Calender</Text>
            </View>
        )
    }
}