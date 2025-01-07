import './global.css'
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView } from 'react-native';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';

let defaultTheme: "dark" | "light" = "light";

type ThemeContextType = {
  colorMode?: "dark" | "light";
  toggleColorMode?: () => void;
};

export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: "light",
  toggleColorMode: () => { },
});

export default function App() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <SafeAreaView className={`${colorMode === "light" ? "bg-[#E5E5E5]" : "bg-[#262626]"}`} />
      <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        <GluestackUIProvider mode={colorMode}>
          <SafeAreaView className={`${colorMode === "light" ? "bg-white" : "bg-[#171717]"} flex-1 overflow-hidden`}>
            <AppNavigator />
          </SafeAreaView>
        </GluestackUIProvider>
      </ThemeContext.Provider>
    </>
  );
}
