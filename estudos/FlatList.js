import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.creat({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize:18,
        height: 44,
    },
});

const FlatListBasics = () {
    return (
        <View style={styles.container}>
            <FlatList
                data={[
                    {key: 'Pedro'},
                    {key: 'Ferraz'},
                    {key: 'Kayke'},
                    {key: 'Caio'},
                ]}
                renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
};

export default FlatListBasics;