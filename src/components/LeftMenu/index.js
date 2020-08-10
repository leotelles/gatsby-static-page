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
    backgroundColor: "#e1bee7",
  },
}))

export default function LeftMenu() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <MenuItem page="roupas" title="Roupas" />
        <MenuItem page="carros" title="Carros" />
        <MenuItem page="restaurantes" title="Restaurantes" />
      </List>
    </div>
  )
}
