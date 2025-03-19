import { getPlaceholder } from '@/helper/getPlaceholder'
import { TRANSLATE } from '@/routes'
import {
  Autocomplete,
  AutocompleteProps,
  CircularProgress,
  FormHelperText,
  TextField,
  Typography,
} from '@mui/material'
import { find, get, isObject, map } from 'lodash'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import React, { ReactNode, useCallback } from 'react'
import { Controller } from 'react-hook-form'
import { CoreAutoChip } from '../CoreAutoChip'

export interface FormControlAutoCompleteProps<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    'renderInput'
  > {
  control: any
  name: string
  label?: any
  placeholder: string
  InputLabelProps?: any
  inputProps?: any
  InputProps?: any
  required?: boolean
  valuePath?: string
  labelPath2?: string
  labelPath?: string
  loading?: boolean
  hasMessageError?: boolean
  returnValueType?: 'enum' | 'option'
  helperText?: ReactNode | string
  AutoCompleteClassName?: string
  defaultValue?: any
  rules?: any
  isCreateAble?: boolean
  onAfterChangeValue?: any
  errCustom?: boolean
  variant?: 'outlined' | 'filled' | 'standard'
  isViewProp?: boolean
  onChangeValue?: (val: any) => void
  disableOption?: (val: any) => boolean
}

const CoreAutocomplete: <
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>(
  prop: FormControlAutoCompleteProps<T, Multiple, DisableClearable, FreeSolo>
) => React.ReactElement<
  FormControlAutoCompleteProps<T, Multiple, DisableClearable, FreeSolo>
> = (props) => {
  const {
    className,
    control,
    name,
    options,
    label,
    placeholder,
    InputLabelProps,
    inputProps,
    InputProps,
    required,
    readOnly,
    valuePath = 'value',
    labelPath2,
    labelPath = 'label',
    loading,
    hasMessageError = true,
    returnValueType = 'enum',
    multiple,
    disabled,
    helperText,
    isCreateAble,
    AutoCompleteClassName,
    rules,
    defaultValue,
    size,
    errCustom,
    variant = 'standard',
    isViewProp,
    onChangeValue,
    disableOption,
    onAfterChangeValue,
    renderOption,
    ...restProps
  } = props

  const { t } = useTranslation(TRANSLATE.COMMON)

  const router = useRouter()

  const { actionType } = router.query
  const isView = isViewProp ?? actionType === 'VIEW'

  const getValueOption = useCallback(
    (value: any) => {
      if (multiple) {
        if (isCreateAble) {
          return value
        }
        return map(value, (v) => {
          if (!isObject(v)) {
            return (
              find(options, (item) => {
                return get(item, valuePath) === v
              }) ?? null
            )
          }
          return v
        })
      }

      if (returnValueType === 'enum') {
        return find(options, (item) => get(item, valuePath) === value) ?? null
      }
      return value
    },
    [isCreateAble, multiple, options, returnValueType, valuePath]
  )

  return (
    <div className={className}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({
          field: { onChange, onBlur, value, ref },
          fieldState: { error },
        }) => {
          return (
            <Autocomplete
              forcePopupIcon={!isView}
              className={AutoCompleteClassName}
              multiple={multiple}
              value={getValueOption(value) ?? (multiple ? [] : null)}
              defaultValue={defaultValue}
              isOptionEqualToValue={(option, value) => {
                if (value instanceof Object) {
                  return get(option, valuePath) === get(value, valuePath)
                }
                return get(option, valuePath) === value
              }}
              getOptionLabel={(option) => {
                return (
                  (labelPath2
                    ? get(option, labelPath2) + ' - ' + get(option, labelPath)
                    : get(option, labelPath)) ?? ''
                )
              }}
              loading={loading}
              options={options}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <CoreAutoChip
                    {...getTagProps({ index })}
                    label={get(option, labelPath)}
                    key={get(option, valuePath)}
                  />
                ))
              }
              noOptionsText={t('form.autocomplete.no_options')}
              disabled={disabled}
              readOnly={isView || readOnly}
              onChange={(_, value: any) => {
                const afterValue = multiple
                  ? value.map((v: any) => get(v, valuePath))
                  : get(value, valuePath) ?? null

                returnValueType === 'enum'
                  ? onChange(afterValue)
                  : onChange(value)

                if (onChangeValue) {
                  returnValueType === 'enum'
                    ? onChangeValue(afterValue)
                    : onChangeValue(value)
                }
                if (onAfterChangeValue) onAfterChangeValue()
              }}
              onBlur={onBlur}
              renderOption={(props, option) => {
                return (
                  <li {...props} key={get(option, valuePath)}>
                    <Typography variant='body1' title={get(option, labelPath)}>
                      {labelPath2
                        ? get(option, labelPath2) +
                          ' - ' +
                          get(option, labelPath)
                        : get(option, labelPath)}
                    </Typography>
                  </li>
                )
              }}
              renderInput={(params) => (
                <>
                  <TextField
                    {...params}
                    variant={variant}
                    placeholder={getPlaceholder(
                      t,
                      'autocomplete',
                      placeholder,
                      label,
                      isView,
                      value,
                      multiple
                    )}
                    inputRef={ref}
                    label={label}
                    error={Boolean(error || errCustom)}
                    helperText={error && hasMessageError && error.message}
                    InputLabelProps={{
                      ...params.InputLabelProps,
                      shrink: true,
                      required,
                      ...InputLabelProps,
                    }}
                    inputProps={{
                      ...params.inputProps,
                      ...inputProps,
                    }}
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    InputProps={{
                      disableUnderline: isView,
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {loading ? (
                            <CircularProgress color='inherit' size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),

                      ...InputProps,
                    }}
                  />
                  {helperText && <FormHelperText>{helperText}</FormHelperText>}
                </>
              )}
              {...restProps}
            />
          )
        }}
        rules={!isView ? rules : {}}
      />
    </div>
  )
}

export default React.memo(CoreAutocomplete)
