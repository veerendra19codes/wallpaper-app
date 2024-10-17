import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
    const theme = useColorScheme() ?? 'light';

    return <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: "column", gap: 20 }}>
            <View>

                <Headertext text="Panel" />
                <SubHeadertext text="Sign in to save your data" />
            </View>

            <SigninButtons />


            <View style={{ width: "100%", flexDirection: "column", gap: 10, justifyContent: "center", alignItems: "center" }}>
                <Headertext text="Settings" />
                <SubHeadertext text="theme" />
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 40 }}>
                    <Pressable style={{ borderWidth: 1, borderColor: "black", borderRadius: 10, padding: 10, width: "30%" }}>
                        <Text style={{ textAlign: "center", width: "100%" }}>Light</Text>
                    </Pressable>
                    <Pressable style={{ borderWidth: 1, borderColor: "black", borderRadius: 10, padding: 10, width: "30%" }}>
                        <Text style={{ textAlign: "center", width: "100%" }}>Dark</Text>
                    </Pressable>
                    <Pressable style={{ borderWidth: 1, borderColor: "black", borderRadius: 10, padding: 10, width: "30%" }}>
                        <Text style={{ textAlign: "center", width: "100%" }}>System</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    </SafeAreaView>
}

function Headertext({ text }: { text: string }) {
    return <Text style={{ width: "100%", textAlign: "center", fontWeight: "500", fontSize: 30 }}>
        {text}
    </Text>
}

function SubHeadertext({ text }: { text: string }) {
    return <Text style={{ width: "100%", textAlign: "center", fontWeight: "400", fontSize: 20 }}>
        {text}
    </Text>
}

function SigninButtons() {
    const theme = useColorScheme() ?? 'light';


    return <>
        <View style={{ flexDirection: "column", gap: 15 }} >
            <AuthButton label="sign in" icon={<Ionicons
                name={'logo-google'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{ paddingRight: 4 }}
            />} />
            <AuthButton label="sign in" icon={<Ionicons
                name={'logo-apple'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{ paddingRight: 4 }}
            />} />
        </View>
    </>
}

function AuthButton({ label, icon }: {
    label: string,
    icon: any
}) {

    return <Pressable style={{ width: "100%", alignItems: "center" }}>
        <ThemedText style={styles.downloadButton} >
            {icon}
            {label}
        </ThemedText>
    </Pressable>
}

const styles = StyleSheet.create({
    downloadButton: {
        width: "80%",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        padding: 20,
        borderRadius: 15,
        fontWeight: 500,
        fontSize: 20,
        display: "flex",
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },

});
