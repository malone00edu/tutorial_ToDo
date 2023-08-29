import React, {useState} from 'react';
import {StyleSheet, TextInput, Button, View} from 'react-native';

/* Function to handle user inputs within a TextInput. */
export default function AddTodo({submitHandler}) {
    // Updates the current string variable.
    const [text, setText ] = useState('');
    // Sets the text variable to the current string in the TextInput.
    const changeHandler = (val) => {
        setText(val);
    }
    return (
        // Passes the current text string to the function submitHandler, so it can be added to the ToDo list in App.js
        <View>
            <TextInput
                style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)}  title='add todo' color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})