import { Box, Typography } from '@mui/material'
import { ReactNode } from 'react'
type Props = {
  title: string
  data: ReactNode
  uom?: ReactNode
  className?: string
}
export const RowBoxCommon = ({ title, data, uom, className }: Props) => {
  return (
    <Box>
      <div className={className}>
        <Typography
          sx={{
            fontSize: '10px',
            fontFamily: 'Open Sans',
            color: 'rgba(0, 0, 0, 0.6)',
            marginBottom: '10px',
          }}
        >
          {title}
        </Typography>
        <Typography>
          {data}&nbsp;{uom}
        </Typography>
      </div>
    </Box>
  )
}
