import "./i18n";
import "./utils/ignore-warnings"
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context"
export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";
import { AppNavigator, useNavigationPersistence } from "./navigators"
import { initFonts } from "./theme/fonts";
import { ErrorBoundary } from "./screens/error/error-boundary"
const App = ({ }) => {
    useEffect(() => {
        ; (async () => {
            await initFonts() // expo
            // setupRootStore().then(setRootStore)
        })()
    }, [])

    const {
        initialNavigationState,
        onNavigationStateChange,
        isRestored: isNavigationStateRestored,
    } = useNavigationPersistence(NAVIGATION_PERSISTENCE_KEY)
    return (
        // <ToggleStorybook>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <AppNavigator
                initialState={initialNavigationState}
                onStateChange={onNavigationStateChange}
            />
        </SafeAreaProvider>
        // </ToggleStorybook>
    )
};

export default App;
