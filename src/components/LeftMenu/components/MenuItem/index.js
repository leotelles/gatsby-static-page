import React from "react"

import { Link } from "gatsby"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/Inbox"
import { purple } from "@material-ui/core/colors"

function MenuItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <Link
      to="/page-2/"
      style={{
        textDecoration: "none",
        color: "#6a1b9a",
      }}
    >
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={event => handleListItemClick(event, 0)}
      >
        <ListItemIcon>
          <InboxIcon style={{ color: purple[800] }} />
        </ListItemIcon>
        <ListItemText primary="Page 2" />
      </ListItem>
    </Link>
  )
}

export default MenuItem
