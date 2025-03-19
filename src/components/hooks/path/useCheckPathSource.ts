import { useRouter } from 'next/router'

const useCheckPathSource = () => {
  const { pathname } = useRouter()
  const isSource: Boolean = pathname.startsWith('/source/') ? true : false

  return { isSource }
}
export default useCheckPathSource
