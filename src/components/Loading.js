import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const Loading = ({ color }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={color} />
  </View>
);

Loading.propTypes = {
  color: PropTypes.string
};

Loading.defaultProps = {
  color: "#e1e1e1"
};

export default Loading;
