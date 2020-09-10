export const lengthDirection = {
  top: {
    top: 0,
    right: 'widthRight',
    bottom: 'height',
    left: 'widthLeft',
  },
  right: {
    top: 'heightTop',
    right: 0,
    bottom: 'heightBottom',
    left: 'width',
  },
  bottom: {
    top: 'height',
    right: 'widthRight',
    bottom: 0,
    left: 'widthLeft',
  },
  left: {
    top: 'heightTop',
    right: 'width',
    bottom: 'heightBottom',
    left: 0,
  },
  topRight: {
    top: 0,
    right: 'width',
    bottom: 'height',
    left: 0,
  },
  bottomRight: {
    top: 0,
    right: 0,
    bottom: 'height',
    left: 'width',
  },
  bottomLeft: {
    top: 'height',
    right: 0,
    bottom: 0,
    left: 'width',
  },
  topLeft: {
    top: 'height',
    right: 'width',
    bottom: 0,
    left: 0,
  },
}

export const colorDirection = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
  topRight: 'right',
  bottomRight: 'bottom',
  bottomLeft: 'left',
  topLeft: 'top',
}

