import { fileUpload } from '@/service/product/upload'
import { toastError } from '@/toast'
import CircularProgress from '@mui/material/CircularProgress'
import Image from 'next/image'
import { ChangeEvent, ReactNode, useRef, useState } from 'react'

interface Props {
  image: string
  setImage: (val: string) => void
  children: ReactNode
}
const UploadImageCustom = (props: Props) => {
  const { image, setImage, children } = props
  const [loading, setLoading] = useState(false)
  const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target?.files
    setLoading(true)
    if (selectedFiles?.length && selectedFiles?.length > 0) {
      try {
        const formData = new FormData()
        formData.append('file', selectedFiles[0])
        formData.append('feature_alias', 'upload-product-warehouse')
        const res = await fileUpload(formData)
        setImage(res?.data?.data?.url)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        toastError(e)
      }
    }
  }
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      {loading ? (
        <CircularProgress size={20} />
      ) : image ? (
        <div className='relative w-[90px] h-[90px] border border-solid border-[#DFE0EB] rounded-md flex items-center justify-center flex-shrink-0 flex-wrap'>
          <Image src={image} alt='eye' width={80} height={80} />
          <div
            className='absolute cursor-pointer top-2 right-2'
            onClick={() => setImage('')}
          >
            <Image
              alt='remove'
              width={16}
              height={16}
              src={require('@/assets/svg/iconRemove.svg')}
            />
          </div>
        </div>
      ) : (
        <label>
          <div className='flex flex-col'>
            {children}
            <input
              className='hidden'
              type='file'
              ref={inputRef}
              // accept='.pdf,.png,.jpeg,.jpg'
              accept='image/png, image/jpeg, image/jpg'
              onChange={handleFileUpload}
              multiple
            />
          </div>
        </label>
      )}
    </div>
  )
}

export default UploadImageCustom
