import {
  AddCategoryPage,
  AddProductPage,
  AuthPage,
  BidPage,
  BidsPage,
  CategoriesPage,
  CategoryPage, CharacteristicsPage,
  EditCategoryPage,
  EditProductPage,
  HomePage,
  NotFoundPage,
  ProductPage,
  ProductsPage,
  ReviewsPage,
  SettingsPage,
} from '@app/pages'
import { IRoute } from '@app/interfaces'

export const privateRoutes: IRoute = {
  home: {
    path: '/home',
    component: HomePage,
  },
  bids: {
    path: '/bids',
    component: BidsPage,
  },
  bid: {
    path: '/bids/details/:id',
    component: BidPage,
  },
  reviews: {
    path: '/reviews',
    component: ReviewsPage,
  },

  // CATEGORIES ROUTES
  categories: {
    path: '/categories',
    component: CategoriesPage,
  },
  category: {
    path: '/categories/details/:id',
    component: CategoryPage,
  },
  addCategory: {
    path: '/categories/add',
    component: AddCategoryPage,
  },
  editCategory: {
    path: '/categories/edit/:id',
    component: EditCategoryPage,
  },

  products: {
    path: '/products',
    component: ProductsPage,
  },
  product: {
    path: '/products/details/:id',
    component: ProductPage,
  },
  addProduct: {
    path: '/products/add',
    component: AddProductPage,
  },
  editProduct: {
    path: '/products/edit/:id',
    component: EditProductPage,
  },

  characteristics: {
    path: '/characteristics',
    component: CharacteristicsPage
  },

  settings: {
    path: '/settings',
    component: SettingsPage,
  },
}

export const publicRoutes: IRoute = {
  auth: {
    path: '/auth',
    component: AuthPage,
  },
  notFound: {
    path: '/404',
    component: NotFoundPage,
  },
}
