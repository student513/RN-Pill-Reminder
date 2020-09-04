import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface IProps {
}

class Add extends Component<IProps, {}> {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
});

export default Add
