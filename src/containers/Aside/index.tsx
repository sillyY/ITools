import React, { Dispatch, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  Root,
  CollapseWrap,
  Collapse,
  Container,
  Main,
  Search,
  InputBtn,
  Input,
  Menu,
  MenuItem,
  Footer,
  User,
  Avatar,
  UserName,
} from './styled'
import Empty from '../../components/Empty'
import AvatarImg from '../../images/avatar.png'
import * as actions from '../../constants/actionTypes'

interface Props {
  visible: boolean
  dispatch: Dispatch<any>
}

const menuList = [
  {
    name: '三角形构造器',
    icon: 'iconicon-test',
    src: '/triangle',
  },
  {
    name: '时间戳转换',
    icon: 'icontime',
    src: '/timestamp',
  },
]

const Aside = (props: Props) => {
  const { visible, dispatch } = props
  const toggleVisible = (visible: boolean) => {
    dispatch({
      type: actions.TOGGLE_ASIDE_VISIBLE,
      payload: visible,
    })
  }
  const [activeIndex, setActiveIndex] = useState(0)
  const [menu, setMenu] = useState([])
  useEffect(() => {
    setMenu(menuList as any)
  }, [])

  const history = useHistory()
  const onMenuItemClick = (item: any, key: number) => {
    setActiveIndex(key)
    history.push(item.src)
  }

  const onSearchChanged = (e: any) => {
    let value = e.target.value
    if (!value) {
      setMenu(menuList as any)
      return
    }
    let result = menuList.filter((item) => item.name.includes(value))
    setMenu(result as any)
  }
  return (
    <Root visible={visible}>
      <Container>
        <Main>
          <Search>
            <InputBtn>
              <i className="iconfont iconsearch" />
            </InputBtn>
            <Input placeholder="Search" onChange={onSearchChanged} />
          </Search>
          <Menu>
            { menu.length ?
            menu.map((item: any, key: number) => (
              <MenuItem
                className={activeIndex === key ? 'active' : ''}
                onClick={(e) => onMenuItemClick(item, key)}
                key={key}
              >
                <i className={`iconfont ${item.icon}`} />
                {item.name}
              </MenuItem>
            )) : <Empty />}
          </Menu>
        </Main>
        <Footer>
          <User>
            <Avatar src={AvatarImg} />
            <UserName>sillyY</UserName>
          </User>
          <i className="iconfont iconFontAwesomequestioncirclesolid" />
        </Footer>
      </Container>
      <CollapseWrap className={visible ? '' : 'hide'} visible={visible}>
        <Collapse onClick={() => toggleVisible(!visible)}>
          {visible ? (
            <span className="collapse--left" />
          ) : (
            <span className="collapse--right" />
          )}
        </Collapse>
      </CollapseWrap>
    </Root>
  )
}

export default connect((state: any) => ({
  visible: state.common.asideVisible,
}))(Aside)
