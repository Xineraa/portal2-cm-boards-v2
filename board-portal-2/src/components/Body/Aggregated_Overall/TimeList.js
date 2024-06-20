import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core"
import { YouTube, GetApp, ChatBubble } from "@material-ui/icons"
import React from "react"

const TimeList = props => {
  return (
    <List dense={true} style={{ width: "100%" }}>
      {/* this is where props.(whatever).map(element =>{}) surrounds the following*/}
      {/* <Divider /> */}
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary='Profile Name' />
        <ListItemText primary='2 months ago' />
        <ListItemText primary='time' />
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <ChatBubble />
          </IconButton>
          <IconButton edge='end'>
            <GetApp />
          </IconButton>
          <IconButton edge='end'>
            <YouTube />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      {/* sepp here */}
      {/* <Divider /> */}
      <ListItem
        style={{
          backgroundcolor: props.themeStatus
            ? "rgb(154, 166, 187)"
            : "rgb(41, 49, 62)"
        }}>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary='Profile Name' />
        <ListItemText primary='2 months ago' />
        <ListItemText primary='time' />
        <ListItemSecondaryAction>
          <IconButton edge='end'>
            <ChatBubble />
          </IconButton>
          <IconButton edge='end'>
            <GetApp />
          </IconButton>
          <IconButton edge='end'>
            <YouTube />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  )
}

export default TimeList
