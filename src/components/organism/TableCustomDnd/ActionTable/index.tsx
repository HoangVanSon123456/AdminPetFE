import { PRIMARY } from '@/helper/colors'
import { TableCell, TableRow, Typography } from '@mui/material'

// export const TableCellCommon = styled(TableCell)(() => ({
//   '&:first-of-type': {
//     borderLeft: '1px solid #DFE0EB',
//   },
//   '&:last-of-type': {
//     borderRight: '1px solid #DFE0EB',
//   },
// }))

type Props = {
  columns: any
  append: any
  defaultValueLine: any
  action?: string
}

export const ActionTable = ({
  columns,
  append,
  defaultValueLine,
  action = 'Thêm sản phẩm',
}: Props) => {
  return (
    <TableRow>
      <TableCell colSpan={columns.length + 1}>
        <div className='flex items-center gap-10 h-13 px-2'>
          <Typography
            variant='body1'
            style={{
              color: PRIMARY,
              cursor: 'pointer',
            }}
            onClick={() => append(defaultValueLine)}
          >
            {action}
          </Typography>
        </div>
      </TableCell>
    </TableRow>
  )
}
