import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import store from './store'

import Layout from './containers/Layout'
import Triangle from './pages/triangle'
import Timestamp from './pages/timestamp'

import './styles/col.scss'

const GlobalStyle = createGlobalStyle`
html,
body,
#root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
  line-height: 1.4;
  color: #333;
  font-family: arial;
  font-size: 12px;
  background: white;
}
input,
textarea,
select {
  font-size: 12px;
  font-size: 100%;
  font-family: arial;
  font-family: inherit;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
ol,
form {
  margin: 0;
}
h4,
h5,
h6 {
  font-size: 1em;
}
ul,
ol {
  padding-left: 0;
  list-style-type: none;
}
/*image with no-border*/
a img {
  border: 0;
}
img {
  border: 0;
}
.mt-20 {
  margin-top: 20px !important;
}
.mt-40 {
  margin-top: 40px !important;
}
`

const App: React.FC = () => {
  return (
    <ThemeProvider theme={{ mode: 'light', size: 'normal' }}>
      <Provider store={store}>
        <GlobalStyle />
        <HashRouter>
          <Layout>
            <Route exact path="/" render={() => <Redirect to="/triangle" />} />
            <Route path="/triangle" component={Triangle} />
            <Route path="/timestamp" component={Timestamp} />
          </Layout>
        </HashRouter>
      </Provider>
    </ThemeProvider>
  )
}

export default App
