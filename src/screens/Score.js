import {Image, Pressable, Text, View} from "react-native";
import scoreImage from "../../assets/scoreImg.png"
import tw from "twrnc";
import {useRoute} from "@react-navigation/native";

export const Score = ({ navigation }) => {
    const route = useRoute()

    const { score } = route.params

    return (
        <View style={tw`flex-1 items-center mt-5`}>
            <Image source={scoreImage} style={tw.style(tw`h-3/6 mt-2`, { aspectRatio: 1 })} />

            <Text style={tw`text-lg font-medium mt-5`}>Congratulation!! You scored { score } points</Text>

            <Pressable style={tw`bg-purple-500 mt-4 px-6 py-3 rounded`} onPress={() => navigation.navigate("Question")}>
                <Text style={tw`text-white font-medium`}>Play Again</Text>
            </Pressable>
        </View>
    )
}