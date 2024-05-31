import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ProgressBar, MD3Colors } from "react-native-paper";

import EvilIcons from "react-native-vector-icons/EvilIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Profile from "../Header/Profile";
import avater from "./../../assets/avi/male.png";
import SmallText from "../Texts/SmallText";
import RegularText from "../Texts/RegularText";

import { colors } from "../colors";

const Dashboard = () => {
  return (
    <View style={styles.content}>
      <View style={styles.boxContent}>
        <View style={styles.boxContentTitle}>
          <Profile
            img={avater}
            imgStyle={{ width: 55, height: 55 }}
            imgContainerStyle={{
              backgroundColor: "#bdd6ff",
              height: 55,
              width: 55,
            }}
          />
          <View style={styles.iconContainer}>
            <EvilIcons name="chevron-right" size={30} color={colors.white} />
          </View>
        </View>
        <View style={styles.boxContentPrice}>
          <SmallText
            textStyles={{ fontWeight: "500", color: "#FAFCFF", fontSize: 11 }}
          >
            Your available balance is
          </SmallText>
          <RegularText textStyles={{ fontWeight: "800" }}>N20,983</RegularText>
          <View style={styles.centeredText}>
            <SmallText
              textStyles={{
                fontWeight: "500",
                color: "#FFFFFF",
                fontSize: 11,
                textAlign: "center",
              }}
            >
              {" "}
              By this time last month, you spent
            </SmallText>
            <SmallText
              textStyles={{
                fontWeight: "500",
                color: "#FFFFFF",
                fontSize: 11,
                textAlign: "center",
                marginTop: 4,
              }}
            >
              slightly higher (N22,719)
            </SmallText>
          </View>
        </View>
        <View>
          <View style={styles.buttomContent}>
            <SmallText
              textStyles={{
                marginTop: 35,
                marginLeft: 20,
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              Kuda bank
            </SmallText>
            <SmallText
              textStyles={{
                marginTop: 35,
                marginLeft: 205,
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              N12,000.00
            </SmallText>
          </View>
          <View style={styles.buttomContent}>
            <SmallText
              textStyles={{
                marginTop: 20,
                marginLeft: 20,
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              GT Bank
            </SmallText>
            <SmallText
              textStyles={{
                marginTop: 20,
                marginLeft: 232,
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              N950.00
            </SmallText>
          </View>
          <View style={styles.buttomContent}>
            <SmallText
              textStyles={{
                marginTop: 20,
                marginLeft: 20,
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              PiggyVest
            </SmallText>
            <SmallText
              textStyles={{
                marginTop: 20,
                marginLeft: 215,
                fontWeight: "500",
                color: "#FFFFFF",
              }}
            >
              N1,050.00
            </SmallText>
          </View>
        </View>
      </View>
      <View style={styles.boxContent2}>
        <View style={styles.boxContent2Title}>
          <View style={styles.iconContainer2}>
            <Ionicons name="settings-outline" size={20} color={colors.white} />
          </View>
          <View style={styles.iconContainer2a}>
            <EvilIcons name="chevron-right" size={30} color={colors.white} />
          </View>
          <View style={styles.centeredText2}>
            <RegularText textStyles={{ fontSize: 14, fontWeight: "600" }}>
              Sort your transactions
            </RegularText>
            <SmallText
              textStyles={{
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: 12,
                marginTop: 10,
              }}
            >
              Get points for sorting your
            </SmallText>
            <SmallText
              textStyles={{
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: 12,
              }}
            >
              transactions
            </SmallText>
          </View>
        </View>
      </View>
      <SmallText
        textStyles={{ top: 30, left: 20, fontSize: 13, fontWeight: "600" }}
      >
        My Budgets
      </SmallText>
      <View style={styles.boxContent3}>
        <View style={styles.boxContent3Title}>
          <View style={styles.iconContainer2b}>
            <EvilIcons name="chevron-right" size={30} color={colors.white} />
          </View>
          <View style={styles.boxContent3Price}>
            <SmallText>You have</SmallText>
            <RegularText
              textStyles={{ fontSize: 18, fontWeight: "800", marginTop: 10 }}
            >
              N29,880
            </RegularText>
            <SmallText textStyles={{ marginTop: 10 }}>
              Left out of N80,888 budgeted
            </SmallText>
            <ProgressBar
              progress={0.5}
              theme={{ colors: { primary: "#32fc65" } }}
              style={styles.progressBar}
            />
            <View style={styles.sapaStyle}>
                <Entypo name="tripadvisor" size={20} color="#fcd23c" />
              <SmallText
                textStyles={{ left: 10, fontSize: 11, color: colors.white }}
              >
                Sapa go soon catch you bros, calm down!!
              </SmallText>
            </View>
          </View>
        </View>
      </View>
      <SmallText
        textStyles={{ top: 30, left: 20, fontSize: 13, fontWeight: "600" }}
      >
        Transactions
      </SmallText>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  boxContent: {
    borderWidth: 0,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 25,
    backgroundColor: "#2816a7",
    elevation: 5,
    width: 368,
    height: 335,
    shadowColor: "transparent",
  },

  boxContent3: {
    borderWidth: 0,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 25,
    // backgroundColor: colors.blueTransparent,
    backgroundColor: "#432dec",

    elevation: 5,
    width: 368,
    height: 185,
    shadowColor: "transparent",
    marginTop: 50,
  },

  boxContent2: {
    borderWidth: 0,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#2816a7",
    elevation: 5,
    width: 368,
    height: 95,
    shadowColor: "transparent",
  },

  boxContentTitle: {
    paddingTop: 17,
    alignItems: "center",
  },

  boxContent3Title: {
    paddingTop: 20,
    flexDirection: "column",
  },

  boxContent2Text: {
    alignItems: "center",
    textAlign: "center",
  },

  boxContent2Title: {
    flexDirection: "row",
    paddingTop: 17,
  },

  iconContainer: {
    position: "absolute",
    right: 10,
    top: 17,
    backgroundColor: "#2310b2",
    borderRadius: 15,
    height: 30,
    width: 30,
  },

  iconContainer2: {
    backgroundColor: "#5844ee",
    borderRadius: 10,
    height: 40,
    width: 40,
    top: 10,
    left: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer2a: {
    position: "absolute",
    right: 10,
    top: 29,
    backgroundColor: "#2310b2",
    borderRadius: 15,
    height: 30,
    width: 30,
  },

  iconContainer2b: {
    position: "absolute",
    right: 10,
    top: 16,
    backgroundColor: "#2d14e0",
    borderRadius: 15,
    height: 30,
    width: 30,
  },

  boxContent3Price: {
    left: 20,
  },

  centeredText: {
    marginTop: 15,
  },

  centeredText2: {
    left: 40,
  },

  boxContentPrice: {
    alignItems: "center",
    marginTop: 10,
  },

  buttomContent: {
    flexDirection: "row",
  },
  buttomContent2: {
    flexDirection: "row",
  },

  progressBar: {
    width: 325, // Adjust the width as needed
    marginTop: 30,
  },
  sapaStyle: {
    flexDirection: "row",
    marginTop: 20,
  },
});
