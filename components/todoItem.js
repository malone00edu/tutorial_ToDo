import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

/* Function to handle the removal of a task within a list. */
export default function TodoItem({item, pressHandler}) {

    // Displays current tasks within a list. Tap on task to delete from the list.
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={18} color='#333'/>
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10
    }
})