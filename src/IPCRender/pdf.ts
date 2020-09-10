const electron = (window as any).electron
const IpcRender = electron ? electron.ipcRenderer : false

export function convertPDF(opt: any) {
  console.log(opt)
  // NOTE: Electron向`文件`接口添加了`path属性
  IpcRender &&
    IpcRender.send(
      'CONVERT_PDF',
      opt.map((item: any) => item.path)
    )
}
