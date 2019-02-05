import {StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#30d0fe",
        height: 116,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 50,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: "relative",
    },
    headerText:
        {
            color: "#fff",
            fontSize: 28,
        },
});

const Header = (data) => {
    const {headerText, header} = styles;

    return (
        <View style={header}>
            <Text style={headerText}>{data.headerTitle}</Text>
        </View>
    );
};

export {Header}
