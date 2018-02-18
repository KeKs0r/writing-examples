import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Tabs, { Tab } from 'material-ui/Tabs'
import AppBar from 'material-ui/AppBar'

import CalendarIcon from 'material-ui-icons/Event'
import InquiryIcon from 'material-ui-icons/Drafts'
import InvoiceIcon from 'material-ui-icons/Equalizer'
import ProfileIcon from 'material-ui-icons/Person'

const routes = ['calendar', 'inquiry', 'invoice', 'profile']

export class MainLayout extends React.Component {
  constructor(props) {
    super(props)
    const { location: { pathname } } = this.props
    const basePath = pathname.split('/')[1]
    const i = routes.indexOf(basePath)
    this.state = {
      value: i > 0 ? i : 0
    }
  }

  handleChange = (event, value) => {
    const route = routes[value]
    const { history } = this.props
    history.push(`/${route}`)
    this.setState({ value })
  }

  render() {
    const { children } = this.props
    return (
      <Fragment>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={0}
          className="tabbar"
        >
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab icon={<CalendarIcon />} label="Calendar" />
            <Tab icon={<InquiryIcon />} label="Inquiries" />
            <Tab icon={<InvoiceIcon />} label="Invoices" />
            <Tab icon={<ProfileIcon />} label="Profile" />
          </Tabs>
        </AppBar>
        <div style={{ marginTop: 72 }}>{children}</div>
      </Fragment>
    )
  }
}

export default withRouter(MainLayout)
