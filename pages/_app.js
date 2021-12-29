import "../styles/globals.css";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import allReducers from "../redux/reducers";

import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Blog</title>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <NextNProgress color="#199607" height={6} />
      <Component {...pageProps} />
    </Provider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
