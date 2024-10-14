import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="suggested" component={SuggestedScreen} />
            <Tab.Screen name="liked" component={LikedScreen} />
            <Tab.Screen name="library" component={LibraryScreen} />
        </Tab.Navigator>
    );
}

function SuggestedScreen() {
    return <View>
        <Text>Hi from Suggested</Text>
    </View>
}

function LikedScreen() {
    return <View>
        <Text>Hi from Liked</Text>
    </View>
}

function LibraryScreen() {
    return <View>
        <Text>Hi from Library</Text>
    </View>
}