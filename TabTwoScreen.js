import { StyleSheet, Image, TouchableOpacity } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.icons}>
      <TouchableOpacity style= {styles.back}>
        <Image source={require('figma-challenge/assets/images/i1.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style= {styles.setting}>
        <Image source={require('figma-challenge/assets/images/comment-alt.png')}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icons:{
    flexDirection :"row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  back:{
    width: '29.801px',
    height: '30.1px',
    flexShrink: 0

  },
  setting:{
    width: '24px',
    height: '24px',
    flexShrink: 0
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
