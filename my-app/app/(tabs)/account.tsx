import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
    return <SafeAreaView>
        <Text>Account page</Text>
        <Link href={"/accountinfo"}>
            <Text>Account Info</Text>
        </Link>
    </SafeAreaView>
}