import React from 'react'
import Grid from 'material-ui/Grid'

export default function PageBody({ children }) {
  return (
    <Grid className="container-fixed-tabbar">
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
}
