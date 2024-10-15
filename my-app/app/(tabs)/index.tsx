// https://ideogram.ai/assets/progressive-image/balanced/response/SuVYPOauSE2GESq0tyYFbQ


import { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DownloadPicture } from "../../components/BottomSheet";
import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function Explore() {
    const [pictureOpen, setPictureOpen] = useState(false);

    return <SafeAreaView style={{ flex: 1 }}>
        <ParallaxScrollView headerBackgroundColor={{ dark: "black", light: "white" }} headerImage={<Image style={{ flex: 1 }} source={{
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/SuVYPOauSE2GESq0tyYFbQ"
        }} />} >

            <Text style={{ color: "white" }}>Explore page</Text>
        </ParallaxScrollView>
    </SafeAreaView>
}