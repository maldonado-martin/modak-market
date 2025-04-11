import "@/unistyles";

import QueryProvider from "@/components/query-provider";
import useFocusManager from "@/hooks/use-focus-manager";
import useOnlineManager from "@/hooks/use-online-manager";
import Navigation from "@/navigation";

export default function App() {
  useFocusManager();
  useOnlineManager();

  return (
    <QueryProvider>
      <Navigation />
    </QueryProvider>
  );
}
