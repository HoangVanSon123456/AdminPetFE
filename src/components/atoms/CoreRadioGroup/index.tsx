import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  styled,
} from '@mui/material'
import { useRouter } from 'next/router'
import { forwardRef, ReactNode } from 'react'
import { Controller } from 'react-hook-form'

type Option = {
  value: string | number | boolean
  label: ReactNode
}

type CoreRadioGroupProps = {
  name: string
  control: any
  options: Option[]
  defaultValue?: string | number
  disabled?: boolean
  readOnly?: boolean
  row?: any
  isViewProp?: boolean
  onChangeValue?: (val: any) => void
} & RadioGroupProps

const RadioGroupCommon = styled(RadioGroup)(() => ({
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
}))

const CoreRadioGroup = forwardRef<HTMLDivElement, CoreRadioGroupProps>(
  function RadioCustom({
    control,
    name,
    value,
    options,
    defaultValue,
    disabled = false,
    readOnly = false,
    isViewProp,
    onChangeValue,
    row,
    ...props
  }) {
    const router = useRouter()
    const { actionType } = router.query
    const isView = isViewProp ?? actionType === 'VIEW'
    return (
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, ...field } }) => (
          <RadioGroupCommon {...props} {...field} row={row}>
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option.value}
                control={
                  <Radio
                    style={{
                      opacity: isView ? '0.6' : '1',
                    }}
                    inputProps={{
                      disabled: isView || disabled,
                      readOnly: isView || readOnly,
                    }}
                    onChange={(e) => {
                      onChange(e)
                      if (onChangeValue) onChangeValue(option.value)
                    }}
                  />
                }
                label={option.label}
              />
            ))}
          </RadioGroupCommon>
        )}
      />
    )
  }
)

export default CoreRadioGroup
