import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStore } from "redux";
import allReducers from "./Redux/reducers";
import { Provider } from "react-redux";
import  Base  from "./Redux/Base"
//The created store
const store = createStore(
    allReducers,
);

export default function App() {
  return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text style={styles.dummyText}>Create your first React Native Redux App!</Text>
            </View>
            <Base></Base>
        </Provider>
  );
}
const styles = StyleSheet.create({
      container: {
        marginTop: 50,
        alignItems: 'center',
      },
      dummyText: {
        color: 'darkslateblue',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
      }
});

