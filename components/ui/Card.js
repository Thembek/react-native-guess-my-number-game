import { Dimensions, StyleSheet, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

function Card({children}){
    return(
        <View style={styles.card}>
            {children}
        </View>
    );
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,
        shadowColor: 'black',
        shadowoffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
})