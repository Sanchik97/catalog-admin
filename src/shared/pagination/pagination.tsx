import React, { useState } from 'react'
import { Pagination as AntPagination } from 'antd'
import { IPagination } from '@app/interfaces'
import { useHistory, useLocation } from 'react-router-dom'
import { serializeQuery } from '@app/utils/serializeQuery'
import { queryKeys } from '@app/constants/query-keys'
import isEqual from 'react-fast-compare'
import { queryClient } from '@app/index'

interface props {
  pagination: IPagination
  fetchingQueryKey: string
}

const Pagination: React.FC<props> = ({ pagination, fetchingQueryKey }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const { current_page, total, per_page } = pagination
  const { push } = useHistory()
  const { pathname } = useLocation()

  const paginationHandler = async (page: number, query: string) => {
    setIsDisabled(true)

    await push({
      pathname,
      search: serializeQuery(query, page),
    })

    await queryClient.invalidateQueries(fetchingQueryKey)

    setIsDisabled(false)
  }


  const changePage = (page: number) => paginationHandler(page, queryKeys.PAGE)
  const changeShowSize = (current: number, size: number) =>
    paginationHandler(size, queryKeys.PER_PAGE)

  return (
      <AntPagination
        showSizeChanger
        current={current_page}
        defaultCurrent={1}
        onChange={changePage}
        defaultPageSize={15}
        total={total}
        disabled={isDisabled}
        pageSize={per_page}
        responsive={true}
        onShowSizeChange={changeShowSize}
      />
  )
}

const propsAreEqual = (prevProps: props, nextProps: props) => {
  return isEqual(prevProps.pagination, nextProps.pagination)
}

export default React.memo(Pagination, propsAreEqual)
