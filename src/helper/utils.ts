export const handleGetAllPath = (options: any[]) => {
  let arr: any[] = []
  options.forEach((element) => {
    const listArr = element?.children
      ? element.children?.filter((v: any) => v.path)
      : []
    arr = [...arr, ...listArr]
    element?.children?.forEach((ele2: any) => {
      if (ele2.children) {
        arr = [...arr, ...handleGetAllPath([ele2])]
      }
    })
  })
  return arr
}

export const flatMenu = (route: any[]) => {
  let arr = [...route]
  route.forEach((element: any) => {
    if (element?.children?.length > 0) {
      arr = [...arr, ...flatMenu(element?.children)]
    }
  })
  return arr
}