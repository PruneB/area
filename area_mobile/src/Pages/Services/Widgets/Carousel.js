import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class MyCarousel extends Component {
    constructor(props) {
        super(props);
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.card}>
                <Text style={styles.classement}>{ item.top }</Text>
                <Image style={styles.cardImage} source={{uri : item.illustration}}/>
                <Text style={styles.title}>{ item.title }</Text>
                <Text style={styles.artiste}>{ item.artiste }</Text>
            </View>
        );
    }

    render () {
        return (
            <Carousel
                ref={c => this._slider1Ref = c}
                data={this.props.data}
                renderItem={this._renderItem}
                sliderWidth={250}
                itemWidth={250}
                hasParallaxImages={true}
                firstItem={0}
                inactiveSlideScale={0.60}
                inactiveSlideOpacity={0.3}
                inactiveSlideShift={-70}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContentContainer}
                loop={true}
                loopClonesPerSide={2}
                onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
            />
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "black",
        width:"100%",
        height: "90%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
    },
    cardImage: {
        width:250,
        height:250,
    },
    classement: {
        color: "white",
        fontSize: 20,
        marginBottom: 10
    },
    title: {
        textAlign: "center",
        color: "white",
        fontSize:20,
        marginTop: 10
    },
    artiste: {
        color: "white",
        fontSize: 15
    },
    subtitle: {
        color: "white",

    },
    slider: {
        marginTop: 15,
        overflow: 'visible',
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
});