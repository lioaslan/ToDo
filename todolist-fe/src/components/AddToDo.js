import React from 'react';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { addToDo } from '../actions';

const paperStyle = {
    width: "90%",
    margin: "10px",
    padding: "10px"
}

const AddToDo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form id="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addToDo(input.value));
                }}>
                    
                <Grid container spacing={0} >
                    <Grid item xs={11}>
                        <Paper style={paperStyle} >
                            <div style = {{marginLeft: "10px"}}>
                                <TextField
                                    fullWidth={true}
                                    inputRef={node => input = node}
                                />
                            </div>
                        </Paper>
                    </Grid>

                    <Grid >
                        <Button
                            type="submit"
                            variant="contained"
                            style={{ marginLeft: "-60px", backgroundColor: "#03bafc" }}
                        >
                            Add todo
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default connect()(AddToDo);