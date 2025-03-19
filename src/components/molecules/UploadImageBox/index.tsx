import { UploadFileCustom } from '@/components/molecules/UploadFileCustom'
import { fileUpload } from '@/service/product/upload'
import { toastError } from '@/toast'
import { ChangeEvent, useState } from 'react'

interface Props {
  setImage: (val: string) => void
}
const UploadImageBox = (props: Props) => {
  const { setImage } = props
  const [loading, setLoading] = useState(false)
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target?.files
    setLoading(true)
    if (selectedFiles?.length && selectedFiles?.length > 0) {
      try {
        const formData = new FormData()
        formData.append('file', selectedFiles[0])
        formData.append('feature_alias', 'feature-code')
        const res = await fileUpload(formData)

        setImage(res?.data?.data?.url)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        toastError(e)
      }
    }
  }
  return (
    <UploadFileCustom handleFileUpload={handleFileUpload} loading={loading} />
  )
}

export default UploadImageBox
