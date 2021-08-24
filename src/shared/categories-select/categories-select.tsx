import React from 'react'
import { Form, Select } from 'antd'
import { useCategoriesSelect } from '@app/hooks/query/categories'

interface props {}

const CategoriesSelect: React.FC<props> = () => {
  const { isLoading, data } = useCategoriesSelect()

  return (
    <Form.Item name={'category_id'} label={'Категория'} rules={[{ required: true }]}>
      <Select
        showSearch
        optionFilterProp="children"
        placeholder={'Выберите категорию'}
        disabled={isLoading}
        loading={isLoading}
        filterOption={(input, option) =>
          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {data?.map(({ id, title }) => (
          <Select.Option value={id} key={id}>
            {title}
          </Select.Option>
        ))}
      </Select>
    </Form.Item>
  )
}

export default CategoriesSelect
