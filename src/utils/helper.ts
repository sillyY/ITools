// @ts-ignore
const remote = window.electron ? window.electron.remote.app : null
// @ts-ignore
export const getSourceFromRomote = remote && remote.getSource
