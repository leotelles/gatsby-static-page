import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"

import MenuItem from "./components/MenuItem"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginLeft: 0,
    marginRight: "auto",
  },
}))

export default function LeftMenu() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <MenuItem page="page-2" title="Page 2" />
        <MenuItem page="page-3" title="Page 3" />
      </List>
    </div>
  )
}
