import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '@app/hooks/useAuth'

interface props {}

const PrivateRoute: React.FC<props> = ({ children, ...rest }) => {
	const isAuthenticated = useAuth()

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isAuthenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/auth',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	)
}

export default PrivateRoute
