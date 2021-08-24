import React, { useState } from 'react'
import { Input } from 'antd'
import { useHistory } from 'react-router-dom'
import { queryKeys } from '@app/constants/query-keys'
import { serializeQuery } from '@app/utils/serializeQuery'
import { queryClient } from '@app/index'
import {getQueryParams} from "@app/utils/getQueryParams"
import styles from './search-input.module.scss'

interface props {
  fetchingQueryKey: string
}

const SearchInput: React.FC<props> = ({ fetchingQueryKey }) => {
  const { push } = useHistory()
  const [isDisabled, setIsDisabled] = useState<boolean>(false)

  const onSearch = async (q: string) => {
    setIsDisabled(true)

    push({
      search: serializeQuery(queryKeys.Q, q || ''),
    })

    await queryClient.invalidateQueries(fetchingQueryKey)

    setIsDisabled(false)
  }

  return (
    <div className={styles.wrapper}>
      <Input.Search
        defaultValue={getQueryParams('q')}
        enterButton={true}
        placeholder={'Поиск...'}
        loading={isDisabled}
        disabled={isDisabled}
        onSearch={onSearch}
        allowClear={true}
      />
    </div>
  )
}

export default React.memo(SearchInput)
