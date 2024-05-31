import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avi from "./../assets/avi/bells.png";
import SearchIcon from "./../assets/avi/search.png";

//screens
import HomeScreen from "../screens/HomeScreen";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  homeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const IconWrapper = styled.View`
  margin-left: 10px;
`;

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.blue,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 155,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
        }}
      >
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hello John"
                subText="Your finances are looking good"
                {...props}
              />
            ),
            headerLeft: () => <></>,
            headerRight: () => (
              <IconContainer>
                <Profile
                  img={Avi}
                  imgStyle={{ width: 20, height: 20 }}
                  imgContainerStyle={{
                    backgroundColor: colors.blueTransparent,
                    opacity: 0.6,
                  }}
                />
                <IconWrapper>
                  <Profile
                    img={SearchIcon}
                    imgStyle={{ width: 20, height: 20 }}
                    imgContainerStyle={{
                      backgroundColor: colors.blueTransparent,
                      opacity: 0.6,
                    }}
                  />
                </IconWrapper>
              </IconContainer>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
