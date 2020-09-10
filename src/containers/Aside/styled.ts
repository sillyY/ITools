import styled from 'styled-components'
import {
  asideBackgroundColor,
  menuItemColor,
  menuItemActiveColor,
  menuItemAcitveBackgroundColor,
  searchColor,
  searchBackgrounColor,
  FooterColor,
  collapseBackgroundColor,
} from '../../theme/mode'
import {
  asideWidth,
  asidePaddingTop,
  asidePaddingRight,
  asidePaddingBotoom,
  asidePaddingLeft,
} from '../../theme/size'

export const Root: any = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  height: 100%;
  transform: translateX(${({ visible }: any) => (visible ? 0 : '-100%')});
  transition: transform 1s;
  z-index: 99;
`

export const CollapseWrap: any = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 12px;
  height: 100%;
  transition: left 1s;
  &.hide {
    position: absolute;
    top: 0;
    left: ${asideWidth};
  }
`
CollapseWrap.defaultProps = {
  kind: 'default',
}

export const Collapse = styled.div`
  position: relative;
  height: 66px;
  border-bottom: 8px solid transparent;
  border-right: none;
  border-left: 12px solid;
  border-left-color: ${collapseBackgroundColor};
  border-top: 8px solid transparent;
  cursor: pointer;
  span {
    position: absolute;
    &.collapse {
      &--left {
        left: -3px;
        top: 40px;
        transform: rotate(180deg);
        &::before {
          position: absolute;
          content: '';
          border: 8px transparent dashed;
          border-left: 8px white solid;
        }
        &::after {
          position: absolute;
          left: -2px;
          content: '';
          border: 8px transparent dashed;
          border-left: 8px ${collapseBackgroundColor} solid;
        }
      }
      &--right {
        left: -10px;
        top: 24px;
        &::before {
          position: absolute;
          content: '';
          border: 8px transparent dashed;
          border-left: 8px white solid;
        }
        &::after {
          position: absolute;
          left: -2px;
          content: '';
          border: 8px transparent dashed;
          border-left: 8px ${collapseBackgroundColor} solid;
        }
      }
    }
  }
`

Collapse.defaultProps = {
  kind: 'default',
}

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${asideWidth};
  padding-top: ${asidePaddingTop};
  padding-right: ${asidePaddingRight};
  padding-bottom: ${asidePaddingBotoom};
  padding-left: ${asidePaddingLeft};
  background-color: ${asideBackgroundColor};
`

Container.defaultProps = {
  kind: 'default',
}

export const Main = styled.div``

export const Search = styled.div`
  display: flex;
  color: ${searchColor};
`
Search.defaultProps = {
  kind: 'default',
}
export const InputBtn = styled.div`
  border-color: transparent;
  padding: 12px 9px 12px 15px;
  background-color: ${searchBackgrounColor};
  border: 1px solid ${searchBackgrounColor};
  border-radius: 8px;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`
InputBtn.defaultProps = {
  kind: 'default',
}

export const Input = styled.input`
  width: 100%;
  border-color: transparent;
  background-color: ${searchBackgrounColor};
  border: 1px solid ${searchBackgrounColor};
  border-radius: 8px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  outline: none;
  color: ${searchColor};
  ::-webkit-input-placeholder {
    color: ${searchColor};
  }
`
Input.defaultProps = {
  kind: 'default',
}

export const Menu = styled.ul`
  margin-top: 24px;
`

export const MenuItem = styled.li`
  padding: 12px 20px;
  color: ${menuItemColor};
  cursor: pointer;
  border-radius: 6px;
  transition: 0.3s;
  &.active {
    color: ${menuItemActiveColor};
    background: ${menuItemAcitveBackgroundColor};
  }

  i {
    color: '#7c8b97';
    margin-right: 20px;
  }
`
MenuItem.defaultProps = {
  kind: 'default',
}

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${FooterColor};
  i {
    cursor: pointer;
  }
`
Footer.defaultProps = {
  kind: 'default',
}

export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
`

export const UserName = styled.div`
  margin-left: 12px;
`
