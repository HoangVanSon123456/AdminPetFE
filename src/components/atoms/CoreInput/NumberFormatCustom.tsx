import { useAppSelector } from '@/redux/hook'
import { forwardRef, memo, useCallback } from 'react'
import { NumericFormat } from 'react-number-format'

const NumberFormatCustom = forwardRef<any, any>(function NumberFormatCustomBase(
  props,
  ref
) {
  const { onChange, disabledecimal, disablenegative, ...other } = props

  const { thousandSeparator, decimalSeparator } = useAppSelector(
    (state) => state.companyConfigData
  )

  const handleChange = useCallback(
    (value: any) => {
      if (onChange) {
        onChange({
          target: {
            name: props.name,
            value: value.value,
          },
        })
      }
    },
    [props.name, onChange]
  )

  return (
    <NumericFormat
      {...other}
      thousandSeparator={thousandSeparator === 'COMMA' ? ',' : '.'}
      decimalSeparator={decimalSeparator === 'DOTS' ? '.' : ','}
      decimalScale={disabledecimal ? 0 : other?.decimalscale ?? undefined}
      allowNegative={!disablenegative}
      getInputRef={ref}
      onValueChange={handleChange}
    />
  )
})

export default memo(NumberFormatCustom)
