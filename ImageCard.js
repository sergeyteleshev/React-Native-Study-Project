import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {h, w} from "./consts";

const ImageCard = ({data}) => {
    const {h1, view, img} = styles;
    const {image, name} = data;

    return (
        <View style={view}>
            <Image style={img} source={{
                uri: image,
            }}/>
            <Text style={h1}>{name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    h1: {
        fontSize: 18,
        textAlign: 'center',
        width: w / 2.4,
    },
    view: {
        paddingVertical: 10,
        marginTop: 0.05 * w,
        alignItems: 'flex-start',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4,
        width: w / 2.1,
    },
    img: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,
    }
});

export {ImageCard}