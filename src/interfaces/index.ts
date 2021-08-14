export interface IRoute {
	[key: string]: {
		path: string
		component: React.FunctionComponent
	}
}


export interface LocationState {
	from: {
		pathname: string
	}
}
