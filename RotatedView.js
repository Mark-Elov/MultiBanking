import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withSequence } from 'react-native-reanimated';
import  {Button, View} from 'react-native'
import React from 'react'

function WobbleExample(props) {
  const rotation = useSharedValue(0);
  const resize = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
      transform: [{scale: resize.value}]
    };
  });
  console.log(animatedStyle)

  return (
    <View>
      <Animated.View style={[{width: 100, height: 80, backgroundColor: 'red', margin: 30}, animatedStyle]} />
      <Button
        title={`${animatedStyle}`}
        onPress={() => {rotation.value = withSequence(
          withTiming(-90, { duration: 2050 }),
          withTiming(90, { duration: 2050 }))
          resize.value = withTiming(2, {duration: 2000})
            }
        }
      />
    </View>
  );
}



export default WobbleExample
