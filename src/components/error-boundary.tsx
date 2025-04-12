import { Component, PropsWithChildren } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { GAP } from "@/constants/layout";

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<PropsWithChildren, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error) {
    console.error(error);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <View style={styles.root}>
          <Text>Congrats!</Text>
          <Text>You managed to break the app. Please restart it.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create((theme) => ({
  root: {
    flex: 1,
    backgroundColor: theme.colors.background,
    gap: GAP,
    justifyContent: "center",
    alignItems: "center",
  },
}));
