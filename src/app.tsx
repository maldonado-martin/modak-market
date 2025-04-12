import "@/unistyles";

import * as Linking from "expo-linking";

import ErrorBoundary from "@/components/error-boundary";
import QueryProvider from "@/components/query-provider";
import useFocusManager from "@/hooks/use-focus-manager";
import useOnlineManager from "@/hooks/use-online-manager";
import Navigation from "@/navigation";

export default function App() {
  useFocusManager();
  useOnlineManager();

  return (
    <ErrorBoundary>
      <QueryProvider>
        <Navigation linking={{ prefixes: [Linking.createURL("/")] }} />
      </QueryProvider>
    </ErrorBoundary>
  );
}
