import { CoreButton } from '@/components/atoms/CoreButton'
import CoreInput from '@/components/atoms/CoreInput'
import { useDialog } from '@/components/hooks/dialog/useDialog'
import ThreeDotVertical from '@/components/icons/ThreeDotVertical'
import { CoreDialog } from '@/components/organism/CoreDialog'
import { PRIMARY } from '@/helper/colors'
import { useFormCustom } from '@/lib/form'
import { useAppDispatch } from '@/redux/hook'
import { addOneTableConfig } from '@/redux/reducer/tableReducer'
import { TRANSLATE } from '@/routes'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { Box, Checkbox, IconButton, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useTranslation } from 'react-i18next'
import { ColumnProps } from '.'

const defaultValues = {
  search: '',
  checkedList: [],
}

export const DialogTable = ({
  columns,
  columnsChecked,
  tableName,
}: {
  tableName?: string
  columns: {
    header: ReactNode
    fieldName: string
  }[]
  columnsChecked: (ColumnProps | undefined)[]
}) => {
  const { t } = useTranslation(TRANSLATE.COMMON)
  const { hideDialog } = useDialog()
  const dispatch = useAppDispatch()

  const { control, watch, getValues, setValue, reset, handleSubmit } =
    useFormCustom<{
      search: string
      checkedList: {
        header: ReactNode
        fieldName: string
      }[]
    }>({
      defaultValues: {
        ...defaultValues,
        checkedList: columnsChecked,
      },
    })

  const grid = 8

  const getItemStyle = (
    isDragging: boolean,
    draggableStyle: any
  ): React.CSSProperties => ({
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    background: isDragging ? '#f5abb3' : '#849efa',
    ...draggableStyle,
  })

  const handleColumnCheckboxChange = (
    fieldName: string,
    isChecked: boolean
  ) => {
    const currentList = getValues('checkedList')
    if (isChecked) {
      const selectedColumn = columns.find((col) => col.fieldName === fieldName)
      if (selectedColumn) {
        setValue('checkedList', [...currentList, selectedColumn])
      }
    } else {
      setValue(
        'checkedList',
        currentList.filter((col) => col.fieldName !== fieldName)
      )
    }
  }

  const handleColumnRemove = (fieldName: string) => {
    const currentList = getValues('checkedList')
    setValue(
      'checkedList',
      currentList.filter((col) => col.fieldName !== fieldName)
    )
  }

  const reOrder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  const onDragEnd = (result: any) => {
    if (!result.destination) return
    const reorderedList = reOrder(
      watch('checkedList'),
      result.source.index,
      result.destination.index
    )
    setValue('checkedList', reorderedList as any)
  }

  const handleReset = () => reset(defaultValues)

  const handleFormSubmit = handleSubmit(async (input) => {
    if (tableName) {
      dispatch(
        addOneTableConfig({
          tableName,
          columns: input.checkedList.map((col) => col.fieldName),
        })
      )
    }
    hideDialog()
  })

  const handleIconButton = (col: any) => {
    return (
      <IconButton onClick={() => handleColumnRemove(col.fieldName)}>
        <CloseOutlinedIcon fontSize='small' />
      </IconButton>
    )
  }

  const renderDraggable = () => {
    return watch('checkedList').map((col, index) => (
      <Draggable key={col.fieldName} draggableId={col.fieldName} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className='flex h-20 w-full rounded-sm items-center justify-between px-5'
            style={getItemStyle(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <div className='flex items-center'>
              <ThreeDotVertical />
              <Typography>{col.header}</Typography>
            </div>
            {handleIconButton(col)}
          </div>
        )}
      </Draggable>
    ))
  }

  const renderDragDropContext = () => {
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                padding: '16px',
              }}
            >
              {renderDraggable()}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }

  return (
    <CoreDialog title='TÙY BIẾN CỘT' onClose={hideDialog} width={782}>
      <div className='flex w-full min-h-[300px] p-10'>
        {/* Left Column */}
        <div
          className='flex w-1/2 flex-col px-10'
          style={{ borderRight: '1px solid #DFE0EB' }}
        >
          <CoreInput label='Tìm kiếm cột' control={control} name={'search'} />
          {columns.map((col, index) => (
            <div className='flex gap-5 mt-5' key={'key' + index}>
              <Checkbox
                checked={watch('checkedList')
                  .map((item) => item.fieldName)
                  .includes(col.fieldName)}
                onChange={(e, checked) =>
                  handleColumnCheckboxChange(col.fieldName, checked)
                }
              />
              <div className='flex items-center'>
                <Typography variant='body1'>{col.header}</Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className='flex w-1/2 px-10 flex-col'>
          <div className='h-28 flex items-center'>
            <Typography variant='subtitle1'>
              {`CỘT ĐƯỢC CHỌN (${watch('checkedList').length})`}
            </Typography>
          </div>
          {renderDragDropContext()}
          <Box
            className='h-20 flex items-center mt-5 cursor-pointer'
            onClick={handleReset}
          >
            <Typography variant='body2' sx={{ color: PRIMARY }}>
              Bỏ chọn tất cả các cột
            </Typography>
          </Box>
        </div>
      </div>
      <div className='flex justify-center gap-10 py-10'>
        <CoreButton theme='cancel' onClick={hideDialog}>
          {t('common:btn.cancel')}
        </CoreButton>
        <CoreButton theme='submit' onClick={handleFormSubmit}>
          {t('common:btn.confirm')}
        </CoreButton>
      </div>
    </CoreDialog>
  )
}
