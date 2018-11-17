import React, { PureComponent } from "react";
import { View } from "react-native";

export default class ItemSeparator extends PureComponent {
  render() {
    return (
      <View
        style={{
          marginVertical: 3,
          paddingHorizontal: 3
        }}
      />
    );
  }
}
