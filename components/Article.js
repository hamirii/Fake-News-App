import React from "react";
import { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  WebView,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import appBackground from "../AppBackground";
import LogoSize from "../helperMethods/LogoSize";

const windowWidth = Dimensions.get("window").width;

var dims = LogoSize(200, 127);

function Article({ headline, imageURI, imageLogo, navigation, url }) {
  var theWidth = 0;
  Image.getSize(imageLogo, (height, width) => {
    theWidth = width;
  });
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ArticleWebView", { url })}
      style={{ flex: 1 }}
    >
      <Card>
        <Card.Content
          style={{
            paddingLeft: 19,
            paddingRight: 19,
            paddingTop: 19,
            paddingBottom: 10,
            backgroundColor: appBackground,
            flex: 1,
          }}
        >
          <Card.Cover
            style={{ borderRadius: 5, flex: 1 }}
            source={{ uri: imageURI }}
          />
        </Card.Content>
        <Card.Content
          style={{
            paddingLeft: 19,
            paddingRight: 19,
            backgroundColor: appBackground,
            flex: 1,
          }}
        >
          <Image
            style={{
              resizeMode: "contain",
              height: dims.height,
              width: dims.width,
            }}
            source={imageLogo}
          />
        </Card.Content>
        <Card.Content
          style={{
            paddingLeft: 19,
            paddingRight: 19,
            backgroundColor: appBackground,
            flex: 1,
          }}
        >
          <Title>{headline}</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}

export default Article;
