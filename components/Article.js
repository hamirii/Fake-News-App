//import * as React from 'react';
import React from 'react';
import { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

function Article({headline, imageURI}){
  return (
      <Card>
        <Card.Cover source={{uri: imageURI }} />
        <Card.Content>
          <Title>{headline}</Title>
        </Card.Content>
      </Card>
  );
}

export default Article;