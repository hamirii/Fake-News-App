import { Appbar } from "react-native-paper";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Trackback({ trackback, navigation }) {
  if (trackback == "yes") {
    return <Appbar.BackAction onPress={() => navigation.goBack()} />;
  }
  return (
    <Appbar.Action
      icon={{
        uri:
          "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png",
      }}
    />
  );
}

function Header({ title, navigation, trackback }) {
  return (
    <Appbar.Header style={styles.top}>
      <Trackback trackback={trackback} navigation={navigation} />
      <Appbar.Content
        title={<Text>{title}</Text>}
        style={{ alignItems: "center", color: "black" }}
      />
      <Appbar.Action icon={require("./assets/snack-icon.png")} />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: "#e6ddc5",
  },
});

export default Header;
