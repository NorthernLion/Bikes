
import React from 'react'
import ReactDOM from 'react-dom'
import serviceWorker from './serviceWorker'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './util/store'
import client from './util/apollo'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <App />
        </ApolloHooksProvider>
      </ApolloProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker()