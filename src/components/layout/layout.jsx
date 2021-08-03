import React from 'react';
import Head from 'components/head/head';
import AppBar from 'components/app-bar/app-bar';
import Main from 'components/main/main';
import Footer from 'components/footer/footer';
import 'normalize.css';
import 'styles/global.scss';

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <AppBar />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
