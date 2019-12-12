import React from 'react';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import { deleteTodo, changeStatus } from '../actions';
import { connect } from 'react-redux';
import DoneIcon from '@material-ui/icons/Done';
import WorkIcon from '@material-ui/icons/Work';
import DeleteIcon from '@material-ui/icons/Delete';

class ToDo extends React.Component {
    render() {
        let { todo, id, dispatch } = this.props;
        return (
            <div >
                <li>
                    <span style={{ width: "80%", display: "inline-block", }}>
                        {todo}
                    </span>

                    <span style = {{display: "inline-block" , margin: "10px" }}>
                        <Tooltip title="Doing">
                            <WorkIcon 
                                onClick = {(e) => dispatch(changeStatus(id, 'doing'))}
                            />
                        </Tooltip>
                    </span>

                    <span style={{ display: "inline-block", margin: "10px" }}>
                        <Tooltip title="Done">
                            <DoneIcon 
                                onClick = {(e) => dispatch(changeStatus(id, 'done'))}
                            />
                        </Tooltip>
                    </span>

                    <span style={{ display: "inline-block", margin: "10px"  }}>
                        <Tooltip title="Delete">
                            <DeleteIcon
                                onClick={(e) => dispatch(deleteTodo(id))}
                            />
                        </Tooltip>
                    </span>
                    <Divider />
                </li>
            </div>
        );
    }
}

export default connect()(ToDo);