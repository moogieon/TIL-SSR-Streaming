import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Environment } from "relay-runtime";

function MyApp({ Component, pageProps }: AppProps) {
  const { RelayEnvironmentProvider } = require("react-relay");

  return (
    <RelayEnvironmentProvider environment={Environment}>
      <Component {...pageProps} />
    // </RelayEnvironmentProvider>
  );
}

export default MyApp;
