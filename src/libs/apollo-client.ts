import { ApolloClient, InMemoryCache } from '@apollo/client'
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs'

import { SERVER_URL } from '@/constants/url.constants'

const httpLink = createUploadLink({
  uri: SERVER_URL,
  credentials: 'include',
  headers: {
    'apollo-require-preflight': 'true'
  }
})

// const wsLink = new WebSocketLink({
// 	uri: process.env.NEXT_PUBLIC_WEBSOCKET_URL,
// 	options: {
// 		reconnect: true
// 	}
// })

// const splitLink = split(
// 	({ query }) => {
// 		const definition = getMainDefinition(query)

// 		return (
// 			definition.kind === 'OperationDefinition' &&
// 			definition.operation === 'subscription'
// 		)
// 	},
// 	wsLink,
// 	httpLink
// )

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
