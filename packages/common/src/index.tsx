import React, { Fragment, useState } from "react";
import { Button, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

export const App = () => {

    const [step, setStep] = useState(0)
    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>{step}</Text>
                            <Button title='increment' onPress={() => setStep(1 + step)} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#fff',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: '#fff',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: "#000",
    },
    highlight: {
        fontWeight: '700',
    },
})

export default App
