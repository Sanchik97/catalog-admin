import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.min.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {Router} from 'react-router-dom'
import {history} from '@api/history'
import {ConfigProvider} from 'antd'
import ru_RU from 'antd/es/locale/ru_RU'
import {QueryClient, QueryClientProvider} from 'react-query'
import ScrollRestoration from 'react-scroll-restoration'

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.render(
	<ConfigProvider locale={ru_RU}>
		<QueryClientProvider client={queryClient}>
			<Router history={history}>
				<ScrollRestoration/>
				<App/>
			</Router>
		</QueryClientProvider>
	</ConfigProvider>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
