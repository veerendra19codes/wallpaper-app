import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "../../components/BottomSheet";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import SplitView from "@/components/SplitView";

export default function Explore() {
    const [pictureOpen, setPictureOpen] = useState(false);
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
    const wallpapers = useWallpapers();

    return <SafeAreaView style={{ flex: 1 }}>
        <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }} headerImage={<Image style={{ flex: 1 }} source={{
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/SuVYPOauSE2GESq0tyYFbQ"
        }} />} >
            <SplitView wallpapers={wallpapers} />
        </ParallaxScrollView>
        {selectedWallpaper && <DownloadPicture onClose={() => setSelectedWallpaper(null)} wallpaper={selectedWallpaper} />}
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "row"
    },
    innerContainer: {
        flex: 1,
        padding: 10
    },
    imageContainer: {
        paddingVertical: 10
    }
})