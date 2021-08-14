import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom"
import {privateRoutes, publicRoutes} from "@app/routes"
import Layout from "@app/layout/layout"
import PrivateRoute from "@app/hoc/private-route"

function App() {
	return (
		<Switch>
			<Route path={Object.values(privateRoutes).map(route => route.path)}>
				<Layout>
					<Switch>
						<PrivateRoute>
							{Object.values(privateRoutes).map(({path, component}) => (
								<Route key={path} path={path} exact={true} component={component}/>
							))}
						</PrivateRoute>
					</Switch>
				</Layout>
			</Route>

			<Route path={Object.values(publicRoutes).map(route => route.path)}>
				<Switch>
					{Object.values(publicRoutes).map(({path, component}) => (
						<Route key={path} path={path} exact={true} component={component}/>
					))}
				</Switch>
			</Route>
			<Redirect from={'/'} exact={true} to={privateRoutes.home.path}/>

			<Redirect to={publicRoutes.notFound.path}/>
		</Switch>
	)
}

export default App
