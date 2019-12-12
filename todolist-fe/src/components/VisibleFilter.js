import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { connect } from "react-redux";

class VisibleFilter extends React.Component {
  render() {
    return (
      <MenuList>
        <MenuItem onClick = {(e) => this.props.handleClick('all')}>ALL</MenuItem>

        <MenuItem onClick = {(e) => this.props.handleClick('todo')}>TODO</MenuItem>

        <MenuItem onClick = {(e) => this.props.handleClick('doing')}>DOING</MenuItem>

        <MenuItem onClick = {(e) => this.props.handleClick('done')}>DONE</MenuItem>
      </MenuList>
    );
  }
}

export default connect()(VisibleFilter);
