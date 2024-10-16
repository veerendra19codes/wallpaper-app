import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { Colors } from '@/constants/Colors';

export const DownloadPicture = ({ onClose, wallpaper }: {
    onClose: any;
    wallpaper: Wallpaper;
}) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    const theme = useColorScheme() ?? 'light';

    // renders
    return (
        // <View style={styles.container}>
        <BottomSheet
            snapPoints={["90%"]}
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            enablePanDownToClose={true}
            onClose={onClose}
            handleIndicatorStyle={{ height: 0 }}
            handleStyle={{
                display: "none",
            }}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Image source={{ uri: wallpaper.url }} style={styles.image} />

                <View style={styles.topbar}>
                    <Ionicons
                        onPress={onClose}
                        name={'close'}
                        size={24}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                    />
                    <View style={styles.topbarInner}>
                        <Ionicons
                            name={'heart'}
                            size={24}
                            color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                        />
                        <Ionicons
                            name={'share'}
                            size={24}
                            color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                            style={{ paddingLeft: 4 }}
                        />
                    </View>
                </View>

                <ThemedView style={styles.textContainer}>
                    <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
                </ThemedView>

                <ThemedView style={styles.downloadButtonContainer}>
                    <DownloadButton />
                </ThemedView>
            </BottomSheetView>

        </BottomSheet>
        // </View>
    );
};

function DownloadButton() {
    const theme = useColorScheme() ?? 'light';

    return <Pressable>
        <ThemedText style={styles.downloadButton} >
            <Ionicons
                name={'download'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{ paddingRight: 4 }}
            />
            Download
        </ThemedText>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: "transparent",
    },
    image: {
        height: 500,
        borderRadius: 15
    },
    textContainer: {
        width: "100%",
        backgroundColor: "transparent"
    },
    text: {
        padding: 10,
        marginTop: 20,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600",
        color: "black"
    },
    downloadButtonContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    downloadButton: {
        width: "80%",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        padding: 20,
        paddingHorizontal: 40,
        borderRadius: 15,
        margin: 10,
        marginBottom: 30,
        fontWeight: 500,
        fontSize: 20
    },
    topbar: {
        position: "absolute",
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%"
    },
    topbarInner: {
        display: "flex",
        flexDirection: "row",
    },
});
