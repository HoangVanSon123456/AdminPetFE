import { useRouter } from 'next/router'

export const useTitle = () => {
  const router = useRouter()
  const { actionType } = router.query
  const isView = actionType === 'VIEW'

  const getButtonLabel = (code: string, isUpdate: boolean, t: any) => {
    if (isView) {
      return code
    } else if (isUpdate) {
      return t('common:btn.edit') + ' ' + code
    } else {
      return t('common:btn.add')
    }
  }

  const getTitleLoSerial = (
    isUpdate: any,
    detail: string,
    edit: string,
    add: string
  ) => {
    if (isView) {
      return detail
    } else if (isUpdate === null || isUpdate === 0) {
      return add
    } else {
      return edit
    }
  }

  return {
    getButtonLabel,
    getTitleLoSerial,
  }
}
