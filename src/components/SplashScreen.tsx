import { StyleSheet, View, ActivityIndicator, Image } from "react-native";

const Splashscreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../assets/logo.png")} />
            <ActivityIndicator style={styles.load} size={50} color={"white"}></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1D1D1D",
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
        maxWidth: "80%",
        height: "25%",
        marginTop: -100
    },
    load: {
        margin: 30
    }
});

export default Splashscreen;