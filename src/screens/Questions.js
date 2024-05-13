import {Alert, Pressable, StyleSheet, Text, View} from "react-native";
import React, {useState} from "react";
import {reactQuestions} from "../config/question";
import tw from "twrnc";
import * as Progress from 'react-native-progress';

const Questions = ({ navigation }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null)
    const [isCorrect, setIsCorrect] = useState(null)

    const progress = (currentQuestion + 1) / reactQuestions.length
    const handleNext = () => {
        if (currentQuestion === reactQuestions.length - 1) {
            navigation.navigate("Score", { score: score })
        } else {
            setCurrentQuestion(currentQuestion + 1)
            setIsCorrect(null)
            setSelectedOption(null)
        }
    }

    const handleOptionPress = (pressedOption) => {
        setSelectedOption(pressedOption)

        if (reactQuestions[currentQuestion].correctAnswer === pressedOption) {
            setIsCorrect(true)
            setScore(score + 10)
        } else {
            setIsCorrect(false)
        }
    }

    return(
        <View style={tw`mt-6 p-4`}>
            <View style={tw`mb-4`}>
                <Progress.Bar progress={progress} width={null} height={20} color={"rgb(168, 85, 247)"} />
            </View>

            <Text style={tw`text-2xl mb-4`}>{ reactQuestions[currentQuestion].question }</Text>

            { reactQuestions[currentQuestion].options.map(
                (option, index) => (
                    <Pressable
                        key={index}
                        style={tw`border-2 border-purple-500 p-4 my-2 rounded-md 
                                ${
                                    selectedOption === option ? 
                                        isCorrect ? 
                                            'bg-green-200 border-green-500' : 
                                            'bg-red-200 border-red-500' : 
                                            'border-purple-500'
                                }
                            `}
                        onPress={() => handleOptionPress(option)}
                        disabled={selectedOption}
                    >
                        <Text style={tw`text-lg`}>{ option }</Text>
                    </Pressable>
                )
            ) }

            <Pressable style={tw`bg-purple-500 p-4 rounded-md mt-6`} onPress={handleNext}>
                <Text style={tw`text-white text-lg text-center font-bold`}>{ currentQuestion === reactQuestions.length - 1 ? 'Finish' : 'Next' }</Text>
            </Pressable>
        </View>
    )
}

export default Questions;

const styles = StyleSheet.create({});