import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {h, w} from "../helpers/consts";

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
        marginTop: 10
    },
    view: {
        paddingVertical: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowRadius: 8,
        shadowOffset: {width: 2, height: 20},
        shadowOpacity: 1,
        width: w / 2.1,
    },
    img: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,
    }
});

export {ImageCard}