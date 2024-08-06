import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text onPress={() => Alert('This is the "Home" screen.')}>HomeScreen</Text>
        </View>
    );
}