import React from 'react'
import PropTypes from 'prop-types'

import { Menu, Segment } from 'semantic-ui-react'

const propTypes = {
  tabs: PropTypes.array,
  tabComponent: PropTypes.element,
  show: PropTypes.func,
  activeItem: PropTypes.string,
}

export default function Tabs(propTypes) {
  const { show, tabs, tabComponent: Component, activeItem } = propTypes

  return (
    <div>
      <Menu pointing secondary>
        {tabs.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              name={item.name}
              active={activeItem === item.name}
              onClick={show}
            />
          )
        })}
      </Menu>
      <Segment>
        <Component {...propTypes} />
      </Segment>
    </div>
  )
}
