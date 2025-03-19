import {
  Checkbox,
  FormControlLabel,
  FormControlLabelProps,
} from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { Controller } from 'react-hook-form'

const CoreCheckbox = (
  props: Omit<FormControlLabelProps, 'disabled' | 'readOnly' | 'control'> & {
    name: string
    control: any
    disabled?: boolean
    readOnly?: boolean
    isViewProp?: boolean
    onChangeValue?: (val: any) => void
    onAfterChange?: any
  }
) => {
  const {
    label,
    control,
    name,
    disabled,
    readOnly,
    isViewProp,
    onAfterChange,
    onChangeValue,
    ...rest
  } = props

  const router = useRouter()
  const { actionType } = router.query
  const isView = isViewProp ?? actionType === 'VIEW'

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field } }) => (
        <FormControlLabel
          {...field}
          checked={value}
          label={label}
          control={
            <Checkbox
              style={{
                opacity: isView ? '0.6' : '1',
              }}
              checked={value}
              inputProps={{
                disabled: isView || disabled,
                readOnly: isView || readOnly,
              }}
              onChange={(e, checked) => {
                onChange(e)
                if (onChangeValue) onChangeValue(checked)
                if (onAfterChange) onAfterChange()
              }}
            />
          }
          {...rest}
        />
      )}
    />
  )
}

export default React.memo(CoreCheckbox)
