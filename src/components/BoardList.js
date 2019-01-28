import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import {withStyles} from '@material-ui/core';
import PostList from './PostList';

const style= theme =>({
  button: {
    margin: theme.spacing.unit,
  },
})

class BoardList extends Component {
  state={
    activeBoard: null
  }
  showPosts = event => {
    this.setState({activeBoard: event.target.textContent });
  }

  render() {
    const {classes, addNewBoardButton, boardList} = this.props
//     let activeBoardState=this.state.activeBoard
//     debugger;
// {boardList.map((data,key)=>{
//   if(data===activeBoardState)
//   return true
// }}
    const {activeBoard} = this.state
    let element = [];
    if(activeBoard)
    element = boardList.filter(ele => {
        if(ele.boardName === activeBoard.substring(1, activeBoard.length-1)) {
          return ele;
        } 
      })
    const postArray = element.length > 0 ? element[0].posts : [];
    return (
      <div>
        <Button 
            variant="contained" 
            color="primary" 
            className={classes.button} 
            onClick={addNewBoardButton}>
              Create New Board
        </Button>
        <ul>
          {boardList.map((board, key) => 
            <li key={key} onClick={this.showPosts}> {board.boardName} </li>
          )}
        </ul>
        <PostList element = {postArray}/>
      </div>
    )
  }
}

export default withStyles(style) (BoardList)