import { ExtendButtonBase, IconButtonTypeMap, SvgIcon } from '@mui/material'
import { memo } from 'react'

const DotsIcon = (props: ExtendButtonBase<IconButtonTypeMap<{}, 'button'>>) => {
  return (
    <SvgIcon {...props}>
      <path
        d='M2.25 2.875C2.61467 2.875 2.96441 2.73013 3.22227 2.47227C3.48013 2.21441 3.625 1.86467 3.625 1.5C3.625 1.13533 3.48013 0.785591 3.22227 0.527728C2.96441 0.269866 2.61467 0.125 2.25 0.125C1.88533 0.125 1.53559 0.269866 1.27773 0.527728C1.01987 0.785591 0.875 1.13533 0.875 1.5C0.875 1.86467 1.01987 2.21441 1.27773 2.47227C1.53559 2.73013 1.88533 2.875 2.25 2.875ZM2.25 8.375C2.61467 8.375 2.96441 8.23013 3.22227 7.97227C3.48013 7.71441 3.625 7.36467 3.625 7C3.625 6.63533 3.48013 6.28559 3.22227 6.02773C2.96441 5.76987 2.61467 5.625 2.25 5.625C1.88533 5.625 1.53559 5.76987 1.27773 6.02773C1.01987 6.28559 0.875 6.63533 0.875 7C0.875 7.36467 1.01987 7.71441 1.27773 7.97227C1.53559 8.23013 1.88533 8.375 2.25 8.375ZM3.625 12.5C3.625 12.8647 3.48013 13.2144 3.22227 13.4723C2.96441 13.7301 2.61467 13.875 2.25 13.875C1.88533 13.875 1.53559 13.7301 1.27773 13.4723C1.01987 13.2144 0.875 12.8647 0.875 12.5C0.875 12.1353 1.01987 11.7856 1.27773 11.5277C1.53559 11.2699 1.88533 11.125 2.25 11.125C2.61467 11.125 2.96441 11.2699 3.22227 11.5277C3.48013 11.7856 3.625 12.1353 3.625 12.5ZM7.75 2.875C8.11467 2.875 8.46441 2.73013 8.72227 2.47227C8.98013 2.21441 9.125 1.86467 9.125 1.5C9.125 1.13533 8.98013 0.785591 8.72227 0.527728C8.46441 0.269866 8.11467 0.125 7.75 0.125C7.38533 0.125 7.03559 0.269866 6.77773 0.527728C6.51987 0.785591 6.375 1.13533 6.375 1.5C6.375 1.86467 6.51987 2.21441 6.77773 2.47227C7.03559 2.73013 7.38533 2.875 7.75 2.875ZM9.125 7C9.125 7.36467 8.98013 7.71441 8.72227 7.97227C8.46441 8.23013 8.11467 8.375 7.75 8.375C7.38533 8.375 7.03559 8.23013 6.77773 7.97227C6.51987 7.71441 6.375 7.36467 6.375 7C6.375 6.63533 6.51987 6.28559 6.77773 6.02773C7.03559 5.76987 7.38533 5.625 7.75 5.625C8.11467 5.625 8.46441 5.76987 8.72227 6.02773C8.98013 6.28559 9.125 6.63533 9.125 7ZM7.75 13.875C8.11467 13.875 8.46441 13.7301 8.72227 13.4723C8.98013 13.2144 9.125 12.8647 9.125 12.5C9.125 12.1353 8.98013 11.7856 8.72227 11.5277C8.46441 11.2699 8.11467 11.125 7.75 11.125C7.38533 11.125 7.03559 11.2699 6.77773 11.5277C6.51987 11.7856 6.375 12.1353 6.375 12.5C6.375 12.8647 6.51987 13.2144 6.77773 13.4723C7.03559 13.7301 7.38533 13.875 7.75 13.875Z'
        fill='#747475'
      />
    </SvgIcon>
  )
}

export default memo(DotsIcon)
