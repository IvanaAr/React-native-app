import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const yourname = "Ivana";

    return <View>
        <Text style={styles.textStyle}>Getting started with react Native!</Text>
        <Text style={styles.textStyleTwo}>Your name is {yourname}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyleTwo: {
        fontSize: 20
    }
});

export default ComponentsScreen;
