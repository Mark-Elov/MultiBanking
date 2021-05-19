/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const FirstScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>First Screen</Text>
      <Button
        title="Переход"
        onPress={()=>navigation.navigate("MainHueyn", {id:12, message:"I'm from First Screen"})}
      />

    </View>
    )
}

const SecondScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Second Screen</Text>
      <Button
        title="goBack"
        onPress={()=>navigation.goBack({id:14, message:"I'm from Second"})}
      />
    </View>

    )
}

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const SafeAreaViewComponent = ({navigation, route}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {id, message} = route.params;


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return(
    <SafeAreaView style={backgroundStyle}>
<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
<Button
  title="Переход"
  onPress={()=>navigation.navigate("SecondSscac")}
/>
<ScrollView
  contentInsetAdjustmentBehavior="automatic"
  style={backgroundStyle}>
  <Header />
  <View
    style={{
      backgroundColor: isDarkMode ? Colors.black : Colors.white,
    }}>
    <Section title="Step One">
      Edit <Text style={styles.highlight}>App.js</Text> to change this
      screen and then come back to see your edits.
      New message {message}
    </Section>
    <Section title="See Your Changes">
      <ReloadInstructions />
    </Section>
    <Section title="Debug">
      <DebugInstructions />
    </Section>
    <Section title="Learn More">
      Read the docs to discover what to do next:
    </Section>
    <LearnMoreLinks />
  </View>
</ScrollView>
    </SafeAreaView>
    )
}

const App: () => Node = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstScreen">
        <Stack.Screen name="MainHueyn" component={SafeAreaViewComponent}


        options={{title:"Peoeeo"}} initialParams={{id:0, message:'Whera are?'}}/>
        <Stack.Screen name="FirstScreen" component={FirstScreen}/>
        <Stack.Screen name="SecondSscac" component={SecondScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
