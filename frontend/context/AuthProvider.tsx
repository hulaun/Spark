import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api, setAuthToken } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import { REACT_APP_SERVER_ENDPOINT } from "@env";

const AuthContext = createContext<{
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  user: { email: string; role: string } | null;
  setUser: (user: { email: string; role: string } | null) => void;
  handleLogout: () => Promise<void>;
  login: (email: string, password: string) => Promise<boolean | undefined>;
  isCheckingLogin: boolean;
}>({
  isLogged: false,
  setIsLogged: () => {},
  user: null,
  setUser: () => {},
  handleLogout: async () => {},
  login: async () => false,
  isCheckingLogin: true,
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<{ email: string; role: string } | null>(
    null
  );
  const [isCheckingLogin, setIsCheckingLogin] = useState(true);
  console.log("AuthProvider initialized");
  useEffect(() => {
    api.defaults.baseURL = REACT_APP_SERVER_ENDPOINT;
    const checkLoginState = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const lastLogin = await AsyncStorage.getItem("lastLogin");
        console.log("token:", token);
        console.log("lastLogin:", lastLogin);
        const now = Date.now();
        const sevenDays = 7 * 24 * 60 * 60 * 1000;

        if (token && lastLogin && now - parseInt(lastLogin) < sevenDays) {
          setAuthToken(token);
          const response: any = await api.post("/auth/getToken", { token });
          const data = response.data;

          if (data && data.token) {
            await AsyncStorage.setItem("lastLogin", now.toString());
            await AsyncStorage.setItem("token", data.token);
            setAuthToken(data.token);
            setIsLogged(true);
            setUser(data.user);
            return;
          }
        }

        // Token missing, expired or invalid
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("lastLogin");
        setAuthToken();
        setIsLogged(false);
        setUser(null);
      } catch (error) {
        console.error("Error checking login state:", error);
        setAuthToken();
        setIsLogged(false);
        setUser(null);
      } finally {
        setIsCheckingLogin(false);
      }
    };

    checkLoginState();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", {
        identifier: email,
        password,
      });
      if (response.data?.token) {
        await AsyncStorage.setItem("token", response.data.token);
        await AsyncStorage.setItem("lastLogin", Date.now().toString());
        setAuthToken(response.data.token);
        setIsLogged(true);
        setUser(response.data.user);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          alert("User not found. Please check your email or phone number.");
        } else if (error.response?.status === 401) {
          alert("Invalid password. Please try again.");
        } else {
          alert("An unexpected error occurred. Please try again later.");
        }
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    setAuthToken(); // Remove the token from the Authorization header
    setIsLogged(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        setIsLogged,
        user,
        setUser,
        handleLogout,
        login,
        isCheckingLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
