import { Form, Select } from 'antd'
import React from 'react'
import { useAttributesSelect } from '@app/hooks/query/attributes'
import { FormListFieldData } from 'antd/es/form/FormList'

interface props {
  restField: Pick<FormListFieldData, never>
  name: any
  fieldKey: any
}

const FormAttributesSelect: React.FC<props> = ({ fieldKey, restField, name }) => {
  const { isLoading, data } = useAttributesSelect()

  return (
    <Form.Item name={name} fieldKey={fieldKey} {...restField}>
      <Select
        style={{width: 250}}
        showSearch
        optionFilterProp="children"
        placeholder={'Выберите характеристику'}
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

export default FormAttributesSelect
