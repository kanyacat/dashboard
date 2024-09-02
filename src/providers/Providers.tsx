import { Provider } from "react-redux";
import { ThemeColorProvider } from "../contexts/ThemeColorContext";
import { store } from "../redux/store";
import { ChildrenProps } from "../types/childrenProps";

export const Providers = ({ children }: ChildrenProps) => {
  return (
    <Provider store={store}>
      <ThemeColorProvider>{children}</ThemeColorProvider>
    </Provider>
  );
};
