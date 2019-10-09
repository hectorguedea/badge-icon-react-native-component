import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Badge } from "react-native-elements";

const withBadge = (value, options = {}) => WrappedComponent =>
  class extends Component {
    render() {
      const {
        top = -5,
        right = 0,
        left = 20,
        bottom = 0,
        hidden = !value,
        ...badgeProps
      } = options;

      const badgeValue =
        typeof value === "function" ? value(this.props) : value;
      return (
        <View>
          <WrappedComponent {...this.props} />
          {!hidden && (
            <Badge
              badgeStyle={styles.badge}
              textStyle={styles.badgeText}
              value={badgeValue}
              status="error"
              containerStyle={[
                styles.badgeContainer,
                { top, right, left, bottom }
              ]}
              {...badgeProps}
            />
          )}
        </View>
      );
    }
  };

const styles = StyleSheet.create({
  badge: {
    borderRadius: 9,
    height: 18,
    minWidth: 0,
    width: 18
  },
  badgeContainer: {
    position: "absolute",
    right: "0"
  },
  badgeText: {
    fontSize: 12,
    paddingHorizontal: 0
  }
});

export default withBadge;
