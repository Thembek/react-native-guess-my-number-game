import { Platform, StyleSheet, Text } from 'react-native';
import React from 'react';

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'space-mono',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        //borderWidth: Platform.OS === 'android' ? 2 : 0,
        //borderWidth: Platform.select({ios: 0,android: 2}),
        padding: 12,
    },
})