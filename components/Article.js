//import * as React from 'react';
import React from 'react';
import { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import appBackground from '../AppBackground';
import LogoSize from '../helperMethods/LogoSize';

const windowWidth = Dimensions.get('window').width;

var dims = LogoSize(200, 127);

function Article({headline, imageURI, imageLogo}){
  var theWidth=0;
  Image.getSize(imageLogo,(height, width)=>{
 theWidth = width;
})
  return (
      <Card>
        <Card.Content style={{paddingLeft: 19, paddingRight: 19, paddingTop: 19, paddingBottom: 10, backgroundColor: appBackground}}>
        <Card.Cover style={{borderRadius: 5}} source={{uri: imageURI}} />
        </Card.Content>
        <Card.Content style={{paddingLeft: 19, paddingRight: 19, backgroundColor: appBackground }}>
        <Image
          style={{
            resizeMode: "contain",
            height: dims.height,
            width: dims.width,
          }} source={imageLogo} />
        </Card.Content>
        <Card.Content style={{paddingLeft: 19, paddingRight: 19, backgroundColor: appBackground}}>
          <Title>{headline}</Title>
        </Card.Content>
      </Card>
  );
}

export default Article;