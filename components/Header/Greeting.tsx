import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StyleProp, TextStyle } from "react-native";
import { colors } from "../colors";

// custom components
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const StyledView = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
`;

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
  return (
    <StyledView>
      <RegularText
        textStyles={[
          {
            color: colors.white,
            fontSize: 18,
            marginBottom: 7,
          },
          props.mainTextStyles,
        ]}
      >
        {props.mainText}
      </RegularText>
      <SmallText
        textStyles={[
          {
            fontWeight: 400,
          },
          props.subTextStyles,
        ]}
      >
        {props.subText}
      </SmallText>
    </StyledView>
  );
};

export default Greeting;
