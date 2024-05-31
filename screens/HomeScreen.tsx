import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";

//custom components
import Dashboard from "../components/Dashboard/Dashboard";

const HomeScreenContainer = styled(Container)`
  background-color: ${colors.blue};
  justify-content: space-between;
  width: 100%;
  flex: 1;
`;

const HomeScreen: FunctionComponent = () => {
  return (
    <>
      <HomeScreenContainer>
        <StatusBar style="dark" />
        <Dashboard />
      </HomeScreenContainer>
    </>
  );
};

export default HomeScreen;
