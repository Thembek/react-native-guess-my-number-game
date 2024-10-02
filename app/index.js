import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';

import StartGameScreen from './StartGameScreen';
import GameScreen from './GameScreen';
import Colors from '../constants/colors';
import GameOverScreen from './GameOverScreen';

const Index = () => {
    const [userNumber, setUserNumber] = useState();
    const [gameIsOver, setGameIsOver] = useState(true);
    const [guessRounds, setGuessRounds] = useState(0);

    const [fontsLoaded] = useFonts({
        'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf')
    });

 
    function pickedNumberHandler(pickedNumber){
        setUserNumber(pickedNumber);
        setGameIsOver(false);
    }

    function gameOverHandler(numberOfRounds){
        setGameIsOver(true);
        setGuessRounds(numberOfRounds)
    }

    function startNewGameHandler(){
        setUserNumber(null);
        setGuessRounds(0);
    }

    let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

    if(userNumber){
        screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
    }

    if(gameIsOver && userNumber){
        screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
    }

    return(
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require('../assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
}

export default Index;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});