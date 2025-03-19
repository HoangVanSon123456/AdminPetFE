import { CurrencyFormatCustom } from '@/components/atoms/CurrencyFormatCustom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { TableBody, TableCell, TableRow, Typography } from '@mui/material'
import _, { get } from 'lodash'
import { useId, useState } from 'react'
import { CellContent } from '../CoreTable/components/CellContent'
import { TableCellWithBorderRight } from '.'

export const LineBody = ({
  item,
  columns,
  subColumnName,
  titleField,
  getTitleFieldFn,
  onRowClick,
  isTotalGroup = false,
}: {
  item: any
  columns: any
  subColumnName: string
  titleField: string
  getTitleFieldFn?: any
  onRowClick?: any
  isTotalGroup?: boolean
}) => {
  const key = useId()

  const [open, setOpen] = useState(true)
  return (
    <TableBody key={key}>
      {titleField ? (
        <TableRow>
          <TableCell
            colSpan={columns.length}
            sx={{
              backgroundColor: '#c5e0ed',
              cursor: 'pointer',
            }}
            onClick={() => setOpen(!open)}
          >
            <div className='flex gap-3 items-center'>
              <KeyboardArrowDownIcon
                fontSize='small'
                style={{ transform: open ? 'rotate(180deg)' : undefined }}
              />

              <Typography variant='subtitle1'>
                {getTitleFieldFn
                  ? getTitleFieldFn(get(item, titleField))
                  : get(item, titleField)}
              </Typography>
            </div>
          </TableCell>
        </TableRow>
      ) : (
        <TableRow
          key={key}
          className='hover:bg-slate-100 cursor-pointer'
          onClick={() => {
            if (onRowClick) onRowClick(item?.id, item)
          }}
        >
          {_.map(columns, (column, indexColumn) => {
            return column.fieldName === 'index' ? (
              <TableCellWithBorderRight align='center'>
                <KeyboardArrowDownIcon
                  fontSize='small'
                  style={{ transform: open ? 'rotate(180deg)' : undefined }}
                />
              </TableCellWithBorderRight>
            ) : (
              <TableCellWithBorderRight key={indexColumn} align='center'>
                <CellContent
                  row={column}
                  render={column?.render}
                  fieldName={column?.fieldName}
                />
              </TableCellWithBorderRight>
            )
          })}
        </TableRow>
      )}

      {open
        ? get(item, subColumnName).map((row: any, index: number) => {
            return (
              <TableRow
                key={key}
                className='hover:bg-slate-100 cursor-pointer'
                onClick={() => {
                  if (onRowClick) onRowClick(row?.id, row)
                }}
              >
                {_.map(columns, (column, indexColumn) => {
                  return column.fieldName === 'index' ? (
                    <TableCellWithBorderRight align='center'>
                      {index + 1 > 9 ? index + 1 : `0${index + 1}`}
                    </TableCellWithBorderRight>
                  ) : (
                    <TableCellWithBorderRight key={indexColumn} align='center'>
                      <CellContent
                        row={column}
                        render={column?.render}
                        fieldName={column?.fieldName}
                      />
                    </TableCellWithBorderRight>
                  )
                })}
              </TableRow>
            )
          })
        : null}

      {isTotalGroup && (
        <TableRow
          key={key}
          className='hover:bg-slate-100 cursor-pointer'
          onClick={() => {
            if (onRowClick) onRowClick(item?.id, item)
          }}
        >
          <TableCellWithBorderRight colSpan={columns.length - 2}>
            <Typography variant='subtitle1' ml={0.5}>
              Tổng:
            </Typography>
          </TableCellWithBorderRight>
          <TableCellWithBorderRight align='center'>
            <CurrencyFormatCustom
              variant='subtitle1'
              amount={get(item, 'amountUntaxedTotal')}
            />
          </TableCellWithBorderRight>
          <TableCellWithBorderRight align='center'>
            <CurrencyFormatCustom
              variant='subtitle1'
              amount={get(item, 'amountTaxTotal')}
            />
          </TableCellWithBorderRight>
        </TableRow>
      )}
    </TableBody>
  )
}
