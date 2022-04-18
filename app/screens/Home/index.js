import React from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
const HomeScreen = ({

}) => {
    const { t } = useTranslation()
    return (
        <View style={{ justifyContent: "center", alignContent: "center", backgroundColor: "red", flex: 1 }}>
            <Text>{t("common.hello")}</Text>
        </View>
    )
};

export default HomeScreen;
