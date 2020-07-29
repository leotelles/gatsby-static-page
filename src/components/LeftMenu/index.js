import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"

import MenuItem from "./components/MenuItem"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function LeftMenu() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <MenuItem />
        <MenuItem />
      </List>
    </div>
  )
}
