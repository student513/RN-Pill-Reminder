import React, { PureComponent } from 'react'
import { Text, StyleSheet, TextProps } from 'react-native'
interface MyTextProps extends TextProps {

}

export class MyText extends PureComponent<MyTextProps> {
    
    // async loadFontsAsync() {
    //     await Font.loadAsync({
    //         'ProximaNova': require('../../../assets/fonts/ProximaNova-Regular.otf'),
    //     })
    // }

    // componentDidMount() {
    //     this.loadFontsAsync()
    // }

    render() {
        const { children } = this.props
        return (
            <Text
                style={styles.textStyle}>
                {children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        // fontFamily: 'ProximaNova'
    }
})
