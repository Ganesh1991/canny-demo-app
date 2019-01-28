import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core';

const style= theme =>({
  button: {
    margin: theme.spacing.unit,
  },
})

class PostList extends Component {

  render() {
    const {classes, addNewPostButton, element} = this.props
    let postList = element; 
    return (
      <div>
        <Button 
            variant="contained" 
            color="primary" 
            className={classes.button} 
            onClick={addNewPostButton}>
              Create New Post
        </Button>
        <ul>
            {postList.map((post, key) => 
              <li key={key}> {post.postName} </li>
            )}
          </ul>
      </div>
    )
  }
}

export default withStyles(style) (PostList)