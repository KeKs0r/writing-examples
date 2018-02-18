import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import MainLayout from './components/main-layout'
import CalendarPage from './components/calendar'

import ProfilePage from './components/profile'
import AboutMePage from './components/profile/about-me-page'

import InquiryPage from './components/placeholders/inquiry-page'
import InvoicePage from './components/placeholders/invoice-page'

import NotFoundPage from './components/notfound-page'

const LayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  )
}

export const routes = (
  <Switch>
    <Redirect exact from="/" to="/calendar" />

    <LayoutRoute exact path="/calendar" component={CalendarPage} />
    <LayoutRoute exact path="/inquiry" component={InquiryPage} />
    <LayoutRoute exact path="/invoice" component={InvoicePage} />
    <LayoutRoute exact path="/profile" component={ProfilePage} />

    <Route exact path="/profile/about" component={AboutMePage} />

    <Route component={NotFoundPage} />
  </Switch>
)

export default routes
