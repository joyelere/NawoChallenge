import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

const StyledText = styled.Text`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
  font-family: Inter-Regular;
`;

//types
import { TextProps } from "./types";

const SmallText: FunctionComponent<TextProps> = (props) => {
  return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default SmallText;
