import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import List from "@material-ui/core/List"

import MenuItem from "./components/MenuItem"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 260,
    marginLeft: 0,
    marginRight: "auto",
    backgroundColor: "#f3e5f5",
  },
}))

export default function LeftMenu() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <MenuItem page="page-2" title="Page 2" />
        <MenuItem page="page-3" title="Page 3" />
        <MenuItem page="page-4" title="Page 4" />
      </List>
    </div>
  )
}
