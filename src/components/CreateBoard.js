import React, { Component } from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class CreateBoard extends Component {
  
  state = {
    name: 'Cat in the Hat',    
    multiline: 'Controlled'
  };
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={24}  justify="center">
        <Grid item xs={12} sm={12} md={12}>
          <Grid container spacing={24}  justify="center">
            <TextField
              id="outlined-name"
              label="Board Title"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container spacing={24}  justify="center">
            <TextField
              id="outlined-multiline-flexible"
              label="Comment"
              multiline
              rowsMax="4"
              value={this.state.multiline}
              onChange={this.handleChange('multiline')}
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Grid container spacing={24}  justify="center">
            <Button 
              variant="contained" 
              color="primary" 
              className={classes.button} 
              onClick={this.createBoardButton}>Create Board</Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

CreateBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(CreateBoard)