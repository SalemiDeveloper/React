import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
};

const App = () => {
    return (
        <ScrollView>
            <Text style={{fontSize: 60}}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 60}}>Continue scrollando</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 60}}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 60}}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 60}}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{fontSize: 80}}>React Native</Text>
        </ScrollView>
    )
}

export default App;