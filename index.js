import React, { Component } from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import withBadge from "./component/withBadge";

class Badge extends Component {
  render() {
    const TextWithBadge = withBadge(2, {
      right: 0,
      top: 0
    })(Text);

    const IconWithBadge = withBadge(4)(Ionicons);

    return (
      <View>
        <IconWithBadge
          name="ios-person"
          type="Ionicons"
          color="gray"
          size={32}
        />
        <TextWithBadge>Badge with Text</TextWithBadge>
      </View>
    );
  }
}
