import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'

const httpLink = createHttpLink({
	uri: process.env.NEXT_PUBLIC_SERVER_URL,
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

