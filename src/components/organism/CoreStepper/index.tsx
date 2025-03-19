import icArrowRight from '@/assets/svg/icArrowRight.svg'
import { BLACK, PRIMARY } from '@/helper/colors'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

type Props = {
  listStep?: {
    value: string
    label: string
  }[]
  index?: number
  enableNextStep?: boolean
  color?: string
  height?: number
  state?: string
}

const CoreStepper = ({
  listStep = [
    { value: 'DRAFT', label: 'Nháp' },
    { value: 'PROCESSING', label: 'Chờ xử lý' },
    { value: 'DONE', label: 'Hoàn thành' },
  ],
  index,
  enableNextStep = true,
  color = PRIMARY,
  state,
}: Props) => {
  return (
    <Box
      className='flex items-center'
      sx={{
        opacity: enableNextStep ? 1 : 0.8,
        cursor: enableNextStep ? 'pointer' : 'not-allowed',
      }}
    >
      {listStep.map((v, index) => {
        return (
          <div className='flex relative' key={index}>
            <div
              className='flex -space-x-0.5'
              style={{
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingTop: 15,
                  paddingLeft: 5,
                }}
              >
                <div
                  style={{
                    width: '100%',
                  }}
                >
                  <Typography
                    variant='body1'
                    style={{
                      color: state === v.value ? PRIMARY : BLACK,
                      pointerEvents: 'none',
                    }}
                  >
                    {index + 1}. {v.label}
                  </Typography>
                </div>
                <div>
                  {index + 1 < listStep.length ? (
                    state === v.value ? (
                      <Image
                        alt=''
                        src={icArrowRight}
                        style={{ marginTop: '5px' }}
                      />
                    ) : (
                      <Image
                        alt=''
                        src={icArrowRight}
                        style={{ marginTop: '5px' }}
                      />
                    )
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Box>
  )
}

export default CoreStepper
