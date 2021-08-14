import {
	AuthPage,
	BidPage,
	BidsPage,
	CategoriesPage,
	CategoryPage,
	HomePage, NotFoundPage,
	ProductPage,
	ProductsPage,
	ReviewsPage,
	SettingsPage
} from "@app/pages"
import {IRoute} from "@app/interfaces"


export const privateRoutes: IRoute = {
	home: {
		path: '/home',
		component: HomePage,
	},
	bids: {
		path: '/bids',
		component: BidsPage
	},
	bid: {
		path: '/bids/details/:id',
		component: BidPage
	},
	reviews: {
		path: '/reviews',
		component: ReviewsPage
	},

	categories: {
		path: '/categories',
		component: CategoriesPage
	},
	category: {
		path: '/categories/details/:id',
		component: CategoryPage
	},
	products: {
		path: '/products',
		component: ProductsPage
	},
	product: {
		path: '/products/details/:id',
		component: ProductPage
	},
	settings: {
		path: '/settings',
		component: SettingsPage
	}
}

export const publicRoutes: IRoute = {
	auth: {
		path: '/auth',
		component: AuthPage
	},
	notFound: {
		path: '/404',
		component: NotFoundPage
	}
}
