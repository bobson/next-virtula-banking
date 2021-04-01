import { Fragment, useState } from "react";
import Head from "next/head";
import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";

const Layuot = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Head>
        <title>Virtual Banking</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Encode+Sans+Expanded:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layuot;
