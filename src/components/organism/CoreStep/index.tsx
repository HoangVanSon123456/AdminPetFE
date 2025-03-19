import { BLUE, GREY } from '@/helper/colors'
import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material'
import { memo } from 'react'

interface Props {
  className?: string
  step: number
  stepList: string[]
  onChangeStep?: (val: number) => void
}

const CoreStep = ({ step, stepList, className, onChangeStep }: Props) => {
  return (
    <Box className='flex items-center justify-center w-full'>
      <Stepper
        activeStep={step}
        className={className ?? 'w-full pb-20'}
        sx={{
          '.MuiStepIcon-text': {
            fontSize: 13,
          },
          width: '600px',
        }}
      >
        {stepList.map((item, index) => {
          return (
            <Step key={item}>
              <StepLabel onClick={() => onChangeStep && onChangeStep(index)}>
                <Typography color={step >= index ? BLUE : GREY}>
                  {item}
                </Typography>
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
    </Box>
  )
}

export default memo(CoreStep)
