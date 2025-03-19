import { useRouter } from 'next/router'

const useCheckPathImportWarehouse = () => {
  const router = useRouter()
  const importWarehouseFrom: 'FACTORY' | 'ALL' = router.pathname.startsWith(
    '/importWarehouse/factory'
  )
    ? 'FACTORY'
    : 'ALL'

  return { importWarehouseFrom }
}

export default useCheckPathImportWarehouse
