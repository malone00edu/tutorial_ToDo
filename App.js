import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

/* The main function of the list. */
export default function App() {
    /* A list containing tasks needing to be done */
    const [todos, setTodos] = useState([
        {text: 'buy coffee', key: '1'},
        {text: 'create an app', key: 2},
        {text: 'play on switch', key: 3}
    ]);

    /* When the user taps on a task within the list, the task will disappear from the list. */
    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key !== key);
        });
    }

    /* When the user enters a task to be done within the TextInput and taps on the submit button, the task will be added
    * to the list of tasks needed to be done. */
    const submitHandler = (text) => {
        if(text.length > 3) {
            setTodos((prevTodos) => {
                return [
                    {text: text, key: Math.random().toString()},
                    ...prevTodos
                ]
            })
        }
        else {
            Alert.alert('Opps!', 'Todos must be over 3 char long', [
                {text: 'Understood', onPress: () => console.log('alert closed')}
            ]);
        }
    }
    /* If keyboard is currently displayed on the screen and the user taps anywhere outside the keyboard, the keyboard
    * will disappear. */
    return (
        // <Sandbox/>
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            /*console.log('dismissed keyboard');*/
        }}>
        <View style={styles.container}>
            {/* header */}
            <Header/>
            <View style={styles.content}>
                {/* to form */}
                <AddTodo submitHandler={submitHandler}/>
                <View style={styles.list}>
                    <FlatList
                        data={todos}
                        renderItem={({item}) => (<TodoItem item={item} pressHandler={pressHandler}/>)}
                    />
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
   },
    content: {
       flex: 1,
        padding: 40,
    },
    list: {
       flex: 1,
        marginTop: 20,
    }
});