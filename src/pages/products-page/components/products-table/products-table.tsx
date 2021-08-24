import React from 'react'
import {
  CategoryLink,
  DataTable, DeleteModal,
  EditLink,
  ImageWithFallback,
  Pagination,
  SearchInput,
  SpaceWithDivider
} from '@app/shared'
import { IProductList, IProductsResponse } from '@app/interfaces/products'
import { PRODUCTS_KEY } from '@app/hooks/query/products'
import { ColumnsType } from 'antd/es/table'
import { idType, IImage } from '@app/interfaces'
import { Link } from 'react-router-dom'
import { privateRoutes } from '@app/routes'
import { ICategory } from '@app/interfaces/categories'
import {ProductsService} from "@app/api"
import {priceFormatter} from "@app/utils/priceFormatter"

interface props {
  data: IProductsResponse
}

const ProductsTable: React.FC<props> = ({ data }) => {
  const { data: products, ...pagination } = data

  const tableTitle = () => <SearchInput fetchingQueryKey={PRODUCTS_KEY} />
  const tableFooter = () => <Pagination fetchingQueryKey={PRODUCTS_KEY} pagination={pagination} />

  const columns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id: idType) => <span># {id}</span>,
    },
    {
      title: 'Наименование',
      key: 'title',
      render: ({ id, title }: IProductList) => (
        <Link to={privateRoutes.products.path + '/details/' + id}>{title}</Link>
      ),
    },
    {
      title: 'Изображение',
      dataIndex: 'image',
      render: ({ link }: IImage) => <ImageWithFallback height={75} src={link} />,
    },
    {
      title: 'Категория',
      dataIndex: 'category',
      render: ({ id, title }: ICategory) => <CategoryLink title={title} id={id} />,
    },
    {
      title: 'Дата создания',
      dataIndex: 'created_at',
      render: (text: string) => <span>{new Date(text).toLocaleDateString()}</span> 
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      render: (price: number) => <span>{priceFormatter(price)}</span>
    },
    {
      title: 'Действия',
      key: 'actions',
      align: 'right',
      render: ({id}:IProductList) => (
        <SpaceWithDivider>
          <EditLink id={id} route={'products'}/>
          <DeleteModal id={id} invalidateQueryKey={PRODUCTS_KEY} deleteFunction={ProductsService.delete} />
        </SpaceWithDivider>
      )
    }
  ]

  return (
    <DataTable title={tableTitle} footer={tableFooter} dataSource={products} columns={columns} />
  )
}

export default ProductsTable
