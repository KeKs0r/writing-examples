import React from 'react'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import Divider from 'material-ui/Divider'
import { times } from 'lodash-es'
import { addMonths, format } from 'date-fns/esm'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'
import DaysList from './days-list'

const myStyles = {
  padding: '0px'
}

const MonthHeadlineStyle = {
  fontSize: '1.8em',
  fontWeight: 'bold',
  margin: '12px 0px'
}
const ExpansionPanelSummaryStyles = {
  padding: '0px 8px'
}

function generateMonths() {
  const now = new Date()
  let months = []
  times(12, i => {
    const c = addMonths(now, i)
    months.push(c)
  })
  return months
}

export class MonthList extends React.PureComponent {
  constructor(props) {
    super(props)
    const months = generateMonths()
    this.state = {
      months
    }
  }
  render() {
    const { months } = this.state
    return months.map((month, i) => {
      const key = format(month, 'M')
      return (
        <ExpansionPanel elevation={0} key={key}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            style={ExpansionPanelSummaryStyles}
          >
            <Typography variant="headline" style={MonthHeadlineStyle}>
              {format(month, 'MMMM - YYYY')}
            </Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails style={myStyles}>
            <DaysList month={month} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )
    })
  }
}

export default MonthList
