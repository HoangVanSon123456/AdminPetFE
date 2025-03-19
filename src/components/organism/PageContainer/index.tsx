import { Box } from '@mui/material'
import { ReactNode } from 'react'

const PageContainer = ({
  title,
  children,
  rightStateStep,
}: {
  title?: ReactNode
  children: ReactNode
  rightStateStep?: any
}) => {
  return (
    <Box className='w-full h-full overflow-hidden'>
      <Box
        display='flex'
        justifyContent={rightStateStep ? 'space-between' : 'flex-start'}
        alignItems='center'
      >
        {title && <div>{title}</div>}
        {rightStateStep && <div>{rightStateStep}</div>}
      </Box>

      <Box
        sx={{
          backgroundColor: '#fff',
          minHeight: `calc(100vh - ${title ? 145 : 116}px)`,
        }}
      >
        <Box>{children}</Box>
      </Box>
    </Box>
  )
}

export default PageContainer
