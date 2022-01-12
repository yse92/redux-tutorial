import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import {
    decrement,
    increment,
    reset,
    logIn,
    logOut,
    incrementWithProps,
} from './actions/index';

const Base = () => {
    const counter = useSelector((state) => state.counterReducer.counter);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [text, setText] = React.useState(1);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text} onPress={()=>dispatch(decrement())}>
                    -
                </Text>
                <Text style={styles.text}>
                    {counter}
                </Text>
                <Text style={styles.text} onPress={()=>dispatch(incrementWithProps(text))}>
                    +
                </Text>
            </View>
            <View style={styles.buttonArea}>
                <Text>
                    Put a number to calculate:
                </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => {setText(value)}}
                    value={text}
                />
                <Button title="RESET" style={styles.resetButton}
                        onPress={()=>dispatch(reset())}/>
            </View>
        </>
    );
}

export default Base;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100,
    },
    resetButton:{
        color: 'darkslateblue',
    },
    buttonArea:{
        position: 'relative',
        bottom: 250,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 60,
    },
    input: {
        fontSize: 30,
    }
});

// {/*<h1>*/}
// {/*    Hello World <br /> A little Redux Project. YaaY!*/}
// {/*</h1>*/}
// {/*<h3>Counter</h3>*/}
// {/*<h3>{counter}</h3>*/}
// {/*<button onClick={() => dispatch(increment())}>Increase</button>*/}
// {/*<button onClick={() => dispatch(reset())}>Reset</button>*/}
// {/*<button onClick={() => dispatch(decrement())}>Decrease</button>*/}
//
// {/*<h2>For Logged in users only</h2>*/}
// {/*<p>Log in to see a secret about me</p>*/}
// {/*<button onClick={() => dispatch(logIn())}>Login</button>*/}
// {/*<button onClick={() => dispatch(logOut())}>Logout</button>*/}
// {/*{auth ? (*/}
// {/*    <div>*/}
// {/*        <p>*/}
// {/*            I don't more than 50% of redux. But if you know 50% of it, you're like a Superman.*/}
// {/*        </p>*/}
// {/*    </div>*/}
// {/*) : (*/}
// {/*    []*/}
// {/*)}*/}
