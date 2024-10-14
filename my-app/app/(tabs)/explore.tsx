import { DownloadPicture } from "@/components/DownloadPicture";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
    const [openDownload, setOpenDownload] = useState(false);

    return <SafeAreaView>
        <Text>Explore page</Text>
        <Button title="Open Bottom Sheet" onPress={() => setOpenDownload(true)}>
        </Button>
        {openDownload && <DownloadPicture />}
    </SafeAreaView>
}