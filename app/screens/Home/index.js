import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { observer } from "mobx-react-lite"
import SplashScreen from 'react-native-splash-screen'

const HomeScreen = observer(({

}) => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return (
        <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Home</Text>
        </View>
    )
});

export default HomeScreen;
