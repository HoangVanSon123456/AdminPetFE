import { ExtendButtonBase, IconButton, IconButtonTypeMap } from '@mui/material'
import { memo } from 'react'

const ClockCounterIcon = (
  props: ExtendButtonBase<IconButtonTypeMap<{}, 'button'>>
) => {
  return (
    <IconButton {...props}>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='cursor-pointer'
      >
        <path
          d='M8 5V8'
          stroke='#F89E19'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.5981 9.5L8 8'
          stroke='#F89E19'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.48956 6.23242H1.98956V3.73242'
          stroke='#F89E19'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.11091 11.8891C4.8801 12.6583 5.86011 13.1821 6.927 13.3943C7.9939 13.6065 9.09977 13.4976 10.1048 13.0813C11.1098 12.6651 11.9687 11.9601 12.5731 11.0556C13.1774 10.1512 13.5 9.0878 13.5 8C13.5 6.9122 13.1774 5.84884 12.5731 4.94437C11.9687 4.0399 11.1098 3.33495 10.1048 2.91866C9.09977 2.50238 7.9939 2.39346 6.927 2.60568C5.86011 2.8179 4.8801 3.34173 4.11091 4.11091L1.98959 6.23224'
          stroke='#F89E19'
          strokeWidth='1.2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </IconButton>
  )
}

//ClockCounterIcon.defaultProps = {}

//ClockCounterIcon.propTypes = {}

export default memo(ClockCounterIcon)
