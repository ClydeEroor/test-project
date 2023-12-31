import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/src/theme/createEmotionCache';
import '@/src/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import theme from '../theme/theme';
import { useAuth } from '@/src/hooks/useAuth';
import { AuthContext } from '../context/AuthContext';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { user, setUser } = useAuth();

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </AuthContext.Provider>
  );
}
