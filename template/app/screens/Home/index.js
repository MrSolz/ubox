import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { observer } from "mobx-react-lite"
import SplashScreen from 'react-native-splash-screen'
import { useStores } from '../../models';
const HomeScreen = observer(({

}) => {
    const { demoStore } = useStores()
    const { demo } = demoStore
    useEffect(() => {
        SplashScreen.hide();
        console.log('====================================');
        console.log("demoStore", demoStore);
        console.log('====================================');
    }, [])
    return (
        <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Home</Text>
        </View>
    )
});

export default HomeScreen;
