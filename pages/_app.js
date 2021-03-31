import Layuot from "../components/layout/layuot";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layuot>
      <Component {...pageProps} />
    </Layuot>
  );
}

export default MyApp;
