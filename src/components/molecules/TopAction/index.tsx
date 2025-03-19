import EditIcon from '@/components/icons/EditIcon'
import PrintIcon from '@/components/icons/PrintIcon'
import { BLUE, ORANGE, RED } from '@/helper/colors'
import { TRANSLATE } from '@/routes'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { Box, IconButton, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

export type ActionType =
  | 'delete'
  | 'watch'
  | 'edit'
  | 'append'
  | 'remove'
  | 'copy'
  | 'export'
  | 'import'
  | 'history'
  | 'view'
  | 'print'
  | 'assign'
  | 'add'
  | 'reject'
  | 'approve'
  | 'cancel'

type Props = {
  isShowText?: boolean
  actionList: ActionType[]
  onWatchAction?: () => void
  onDeleteAction?: () => void
  onEditAction?: () => void
  onAppendAction?: () => void
  onRemoveAction?: () => void
  onCopyAction?: () => void
  onExportAction?: () => void
  onImportAction?: () => void
  onHistoryAction?: () => void
  onViewAction?: () => void
  onPrintAction?: () => void
  onAssignAction?: () => void
  onAddAction?: () => void
  onRejectAction?: () => void
  onApprove?: () => void
  onCancelAction?: () => void
}

export const TopAction = ({
  isShowText = true,
  actionList,
  onWatchAction,
  onDeleteAction,
  onEditAction,
  onAppendAction,
  onRemoveAction,
  onCopyAction,
  onHistoryAction,
  onViewAction,
  onExportAction,
  onImportAction,
  onAssignAction,
  onPrintAction,
  onAddAction,
  onRejectAction,
  onApprove,
  onCancelAction,
}: Props) => {
  const { t } = useTranslation(TRANSLATE.COMMON)

  return (
    <Box className='flex items-center gap-4'>
      {actionList.includes('print') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onPrintAction}
        >
          <PrintIcon />
          {isShowText && (
            <Typography variant='body2' sx={{ color: '#00CC6A' }}>
              In
            </Typography>
          )}
        </Box>
      )}

      {actionList.includes('approve') && (
        <IconButton onClick={onApprove}>
          <Typography color={BLUE}>Chuyển phê duyệt</Typography>
        </IconButton>
      )}

      {actionList.includes('view') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onViewAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/action/view.svg')}
              alt='view'
              width={16}
              height={16}
            />
          </IconButton>

          {isShowText && (
            <Typography variant='body2'>{t('btn.view')}</Typography>
          )}
        </Box>
      )}

      {actionList.includes('add') && (
        <Box
          className='flex items-center cursor-pointer mx-2'
          onClick={onAddAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/plusCircle.svg')}
              alt='eye'
              width={16}
              height={16}
            />
            <Typography variant='body2' sx={{ color: '#00CC6A' }}>
              Gán nhân viên
            </Typography>
          </IconButton>
        </Box>
      )}

      {actionList.includes('edit') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onEditAction}
        >
          <EditIcon />
          {isShowText && (
            <Typography variant='body2' sx={{ color: '#0078D4' }}>
              {t('btn.edit')}
            </Typography>
          )}
        </Box>
      )}

      {actionList.includes('watch') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onWatchAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/action/watch.svg')}
              alt='watch'
              width={16}
              height={16}
            />
          </IconButton>
          {isShowText && <Typography variant='body2'>{t('detail')}</Typography>}
        </Box>
      )}

      {actionList.includes('delete') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onDeleteAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/action/delete.svg')}
              alt='delete'
              width={16}
              height={16}
            />
          </IconButton>
          {isShowText && (
            <Typography variant='body2' sx={{ color: '#FF4956' }}>
              {t('btn.delete')}
            </Typography>
          )}
        </Box>
      )}

      {actionList.includes('cancel') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onCancelAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/action/delete.svg')}
              alt='delete'
              width={16}
              height={16}
            />
          </IconButton>
          {isShowText && (
            <Typography variant='body2' color={RED}>
              {t('common:btn.cancel')}
            </Typography>
          )}
        </Box>
      )}

      {actionList.includes('reject') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onRejectAction}
        >
          <Image
            src={require('@/assets/svg/action/XCircle.svg')}
            alt='delete'
            width={16}
            height={16}
          />
          <Typography variant='body2' sx={{ color: '#FF4956' }}>
            Từ chối
          </Typography>
        </Box>
      )}

      {actionList.includes('append') && (
        <IconButton onClick={onAppendAction}>
          <Image
            src={require('@/assets/svg/action/append.svg')}
            alt='append'
            width={16}
            height={16}
          />
        </IconButton>
      )}

      {actionList.includes('remove') && (
        <IconButton onClick={onRemoveAction}>
          <Image
            src={require('@/assets/svg/action/remove.svg')}
            alt='remove'
            width={16}
            height={16}
          />
        </IconButton>
      )}

      {actionList.includes('copy') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onCopyAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/action/copy.svg')}
              alt='copy'
              width={16}
              height={16}
            />
          </IconButton>
          {isShowText && (
            <Typography variant='body2'>{t('btn.copy')}</Typography>
          )}
        </Box>
      )}

      {actionList.includes('import') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onImportAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/action/import.svg')}
              alt='import'
              width={16}
              height={16}
            />
          </IconButton>
          {isShowText && (
            <Typography variant='body2'>{t('btn.import')}</Typography>
          )}
        </Box>
      )}

      {actionList.includes('export') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onExportAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/action/export.svg')}
              alt='export'
              width={16}
              height={16}
            />
          </IconButton>

          {isShowText && (
            <Typography
              variant='body2'
              style={{
                color: '#F58020',
              }}
            >
              {t('btn.export')}
            </Typography>
          )}
        </Box>
      )}

      {actionList.includes('history') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onHistoryAction}
        >
          <IconButton>
            <Image
              src={require('@/assets/svg/action/history.svg')}
              alt='copy'
              width={16}
              height={16}
            />
          </IconButton>
          {isShowText && (
            <Typography variant='body2' color={ORANGE}>{t('btn.history')}</Typography>
          )}
        </Box>
      )}

      {actionList.includes('assign') && (
        <Box
          className='flex items-center cursor-pointer'
          onClick={onAssignAction}
        >
          <IconButton>
            <AssignmentIndIcon
              fontSize='small'
              color='primary'
            ></AssignmentIndIcon>
          </IconButton>

          {isShowText && <Typography variant='body2'>Gán</Typography>}
        </Box>
      )}
    </Box>
  )
}
