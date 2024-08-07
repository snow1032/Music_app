import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export default function HomeScreen({ navigation }) {
    const images =[
        require('../assets/images/model1.jpg'),
        require('../assets/images/model2.jpg'),
        require('../assets/images/model3.jpg'),
        require('../assets/images/model4.jpg'),
        require('../assets/images/model5.jpg'),
      ]
    return (

        <View>
            {/* <Text onPress={() => Alert('This is the "Home" screen.')}>HomeScreen</Text> */}
            <SliderBox images={images}  dotColor="red" inactiveDotColor="black" 
            dotStyle={{width: 10, height: 10, borderRadius: 50}}
            imageLoadingColor="black"
            autoplay={true}
            autoplayInterval={3000}
            circleLoop={true}
            onCurrentImagePressed={(index) => alert(index+1) }
            />
        </View>
    );
}