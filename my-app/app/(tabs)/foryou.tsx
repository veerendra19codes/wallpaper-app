import SplitView from '@/components/SplitView';
import useWallpapers, { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

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
    const wallpapers = useSuggestedWallpapers();
    return <SafeAreaView style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </SafeAreaView>
}

function LikedScreen() {
    const wallpapers = useLikedWallpapers();
    return <SafeAreaView style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </SafeAreaView>
}

function LibraryScreen() {
    const wallpapers = useLibraryWallpapers();
    return <SafeAreaView style={styles.container}>
        <SplitView wallpapers={wallpapers} />
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})