import { createContext } from "react";

export type ThemeType ="light" | "dark";

export type ThemeContextType = {
    theme: ThemeType;
    onChangeTheme: VoidFunction;  // () => void 같은 거 (매개변수도 없고 함수 없는 값도 저장될 수 있구나 하기 ~)
}

export const ThemeContext = createContext<ThemeContextType | null>( null);
