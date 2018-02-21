import React from 'react'
import PropTypes from 'prop-types'
import {
  startOfMonth,
  endOfMonth,
  isSameMonth,
  eachDayOfInterval,
  format
} from 'date-fns/esm'
import List, { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import ListItemAvatar from 'material-ui/List/ListItemAvatar'

function getDays(month) {
  const now = new Date()
  const start = isSameMonth(now, month) ? now : startOfMonth(month)
  const end = endOfMonth(month)
  return eachDayOfInterval({ start, end })
}

const ListItemStyles = {
  paddingTop: '16px',
  paddingBottom: '16px'
}

const AvatarStyles = {
  backgroundColor: '#fff',
  color: 'rgba(0, 0, 0, 0.87)',
  height: 'auto',
  display: 'block',
  borderRadius: '0',
  width: '24px',
  marginRight: '8px',
  textAlign: 'center',
  lineHeight: '1',
  paddingTop: '4px',
  paddingBottom: '4px'
}

export class DaysList extends React.PureComponent {
  constructor(props) {
    super(props)
    const days = getDays(props.month)
    this.state = {
      days
    }
  }
  static propTypes = {
    month: PropTypes.instanceOf(Date).isRequired
  }
  render() {
    const { month } = this.props
    const { days } = this.state
    return (
      <List>
        {days.map((d, i) => (
          <ListItem
            divider={i !== days.length - 1}
            style={ListItemStyles}
            key={format(d, 'D')}
          >
            <ListItemAvatar>
              <Avatar style={AvatarStyles}>{format(d, 'D')}</Avatar>
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default DaysList
