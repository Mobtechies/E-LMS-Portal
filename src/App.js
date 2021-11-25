import React from "react";
import { ThemeProvider, makeStyles } from "@material-ui/styles";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import { Provider } from "react-redux";
import { theme } from "./assets/styles/theme";
import store from "./store";
import AuthContextProvider from "./context/AuthContext";
import AppRouting from "./components/routing/AppRouting";
import "./video.css";

const useGlobalStyles = makeStyles({
  "@global": {
    body: {
      backgroundColor: "#F9FAFC",
    },
  },
});

const AppThemeProvider = ({ children }) => {
  useGlobalStyles();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppThemeProvider theme={theme}>
      <Provider store={store}>
        <NotificationContainer />
        <AuthContextProvider>
          <AppRouting />
        </AuthContextProvider>
      </Provider>
    </AppThemeProvider>
  );
};
export default App;
