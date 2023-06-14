import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native"

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>ISS Tracker</Text>
                    </View>
                </ImageBackground>
                <TouchableOpacity style={styles.routeCard} onPress={() =>
                this.props.navigation.navigate("TonightSky")
            }>
                <text style={styles.routeText}>Tonight Sky</text>
                <Image source ={require("../assests/night-sky.png")} style ={{ width: 80, height: 80}}></Image>
            </TouchableOpacity>
            </View>
        );
    }
}

