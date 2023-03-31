import store from "../store/store";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Navbar from "../components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}
