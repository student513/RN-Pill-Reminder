import Modal from 'react-native-modal'
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface SetTypeModalProps {
    showModal: boolean
}

export const SetTypeModal: React.FC<SetTypeModalProps> = (props) => {
    return (
        <View style={styles.content}>
            <Text>Please select the type of reminder.</Text>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('Add', { type: 'Cycle' })
            }}>
                <Text>Set Cycle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('Add', { type: 'DayTime' })
            }}>
                <Text>Select Day & Time </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
});
