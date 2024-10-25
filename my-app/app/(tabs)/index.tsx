import { useState } from "react";
import { Button, Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "../../components/BottomSheet";
import useWallpapers, { Wallpaper } from "@/hooks/useWallpapers";
import ImageCard from "@/components/ImageCard";
import { ThemedView } from "@/components/ThemedView";
import SplitView from "@/components/SplitView";
import Carousel from 'react-native-reanimated-carousel';

export default function Explore() {
    const [pictureOpen, setPictureOpen] = useState(false);
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
    const wallpapers = useWallpapers();
    const width = Dimensions.get('window').width;

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 300 }}>
            <Carousel
                loop
                width={width}
                height={300}
                autoPlay={true}
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
                    </View>
                )}
            />
        </View>
        <SplitView wallpapers={wallpapers} />
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