
import React, { Component } from 'react';
import { Button, View, Text, StatusBar, SafeAreaView, Image, TouchableOpacity, StyleSheet } from 'react-native';


class Home extends Component {
    onSignInPress() {
        this.props.navigation.navigate('loginScreen');
    }
    render() {
        return (

            <View style={styles.container}>
                <SafeAreaView>
                    <View style={styles.containerimg}>
                        <Image style={styles.mainimg} source={require('../assets/images/Bellalogo.png')} />
                        <View style={styles.textcontainer}>
                            <Text style={styles.text}>Food for {'\n'} Everyone</Text>
                        </View>
                        <View style={styles.womencontainer}>
                            <Image style={styles.mencontainer} source={require('../assets/images/ToyFaces_2.png')} />
                            <Image style={styles.womenimg} source={require('../assets/images/ToyFaces.png')} />
                        </View>

                        <TouchableOpacity onPress={() => this.onSignInPress()} style={styles.startbutton}>
                            <Text style={styles.starttext}>
                                Get Started
                            </Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </View>

        );
    }
}
export default Home;
const styles = StyleSheet.create({
    container:
    {
        backgroundColor: 'red',
        height: '100%'
    },
    containerimg: {
        backgroundColor: '#fff',
        margin: 35,
        width: '16%',
        height: '23%',
        borderRadius: 100
    },
    mainimg:
    {
        width: 30,
        height: 30,
        margin: 15
    },
    textcontainer:
    {
        height: "180%",
        width: "400%",
        margin: 20
    },
    text:
    {
        fontWeight: 'bold',
        fontSize: 40,
        color: '#fff'
    },
    womencontainer:
    {
        height: 450,
        width: 420,
        left: -35,
        marginTop: 15,
        flexDirection: 'row-reverse'
    },
    mencontainer:
    {
        height: 300,
        width: 220,
        right: -30,
        marginTop: 50
    },
    womenimg:
    {
        height: 400,
        width: 250,
        left: -50
    },
    startbutton:
    {
        backgroundColor: '#ffff',
        height: 60,
        width: 270,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 30,
        borderRadius: 20
    },
    starttext:
    {
        color: '#FF460A',
        fontSize: 12,
        fontWeight: '600'
    }




})