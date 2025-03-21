import { Typography } from '@mui/material'
import { ReactNode, useEffect, useId, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  isFitContent?: boolean
  breadcrumbs: {
    title?: any
    content: ReactNode
    rightAction?: ReactNode
    isCheckChangeToTab?: boolean
    checkChangeToTabFn?: any
  }[]
  padding?: string
  minWidth?: number
  isNotCursor?: boolean
  tabNumber?: number
  styles?: any
}

const CoreNavbar = (props: Props) => {
  const { t } = useTranslation()
  const {
    breadcrumbs,
    isFitContent,
    padding,
    minWidth,
    isNotCursor,
    tabNumber,
    styles,
  } = props
  const [currentTab, setCurrentTab] = useState(0)

  useEffect(() => {
    if (tabNumber) {
      setCurrentTab(tabNumber)
    }
  }, [tabNumber])

  const key = useId()
  return (
    <div
      className=''
      style={{ marginTop: styles ? styles.marginTop : '0', ...styles }}
    >
      <div className=' flex items-center h-[40px] w-full'>
        {breadcrumbs.map((item, index) => (
          <div key={key} onClick={() => setCurrentTab(index)}>
            <Typography
              variant='body1'
              sx={{
                borderTopLeftRadius: '0.375rem',
                borderTopRightRadius: '0.375rem',
                justifyContent: 'center',
                padding: 1,
                minWidth: minWidth ? minWidth : '100px',
                maxWidth: '100px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                borderBottom: '3px solid #0078D4',
                cursor: isNotCursor
                  ? 'pointer'
                  : currentTab == index
                    ? 'not-allowed'
                    : 'pointer',
                backgroundColor: currentTab == index ? '#0078D4' : undefined,
                color: currentTab == index ? 'white' : undefined,
              }}
              onClick={() => {
                if (item.checkChangeToTabFn) item.checkChangeToTabFn()
                item?.isCheckChangeToTab !== false && setCurrentTab(index)
              }}
            >
              {item.title ? item.title : t('detail')}
            </Typography>
          </div>
        ))}
        <div
          style={{
            borderBottom: '3px solid #0078D4',
            width: '100%',
            height: '40px',
            alignItems: 'revert',
          }}
        >
          <div className='right-10 mt-6 absolute'>
            {breadcrumbs[currentTab]?.rightAction}
          </div>
        </div>
      </div>
      <div
        style={{
          boxShadow: '0px 0px 8px 0px #0000000D',
          minHeight: isFitContent ? undefined : `calc( 100vh - 195px)`,
          border: '1px solid #DFE0EB',
          padding: padding || '32px',
        }}
      >
        {breadcrumbs[currentTab]?.content}
      </div>
    </div>
  )
}

export default CoreNavbar
