import React from 'react'
import { useProducts } from '@app/hooks/query/products'
import { Skeleton } from 'antd'
import { AddLink, ErrorBoundary, PageInfo } from '@app/shared'
import { ProductsTable } from '@app/pages/products-page/components'

interface props {}

const ProductsPage: React.FC<props> = () => {
  const { data, isLoading, isError } = useProducts()

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  return (
    <PageInfo title={'Товары'} subTitle={'Список всех товаров'} extra={[<AddLink route={'addProduct'} key={'1'} />]}>
      <ProductsTable data={data!} />
    </PageInfo>
  )
}

export default ProductsPage
