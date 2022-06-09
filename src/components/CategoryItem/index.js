import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CategoryItem({ data }) {
    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.9}
        >
            <Image 
                style={styles.icon}
                source={{ uri: `http://192.168.0.220:1337${data?.attributes?.icon?.data?.attributes?.url}` }}
            />

            <Text style={styles.name}>{data?.attributes?.name}</Text>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginLeft: 8,
        marginVertical: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    icon: {
        width: 40,
        height: 40,
    },
});
