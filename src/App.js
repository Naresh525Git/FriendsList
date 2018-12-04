import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      activeFriends :['naresh','harish','seetha','kiran'],
      inactiveFriends : ['john','paul'],
      input : ''
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.changeInputState = this.changeInputState.bind(this)
    this.addFriend = this.addFriend.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.handleActivate = this.handleActivate.bind(this)
    this.handleDeactivate = this.handleDeactivate.bind(this)
  }
  handleRemove(name){

    this.setState((currentState) => {return {activeFriends : currentState.activeFriends.filter((friend) => friend !== name)}})
  }

  changeInputState(e){

    var dist = e.target.value;
    this.setState({
      input: dist
    }
    )
  }
  addFriend(){

    this.setState((currentState) =>{
      return {activeFriends: currentState.activeFriends.concat([this.state.input]),
      input:''}
    })
  }
  clearAll(){
    this.setState({
      activeFriends: [],
      inactiveFriends: [],
      input: ''

    })
  }
  handleActivate(name){
    this.setState((currentState) =>{
      return {
          activeFriends: currentState.activeFriends.concat([name]),
          inactiveFriends: currentState.inactiveFriends.filter((friend) => friend !== name),
          input: ''
      }
    }
    )
  }
  handleDeactivate(name)
  {
    this.setState((currentState) => {
      return {
        activeFriends : currentState.activeFriends.filter((friend) => friend != name),
        inactiveFriends: currentState.inactiveFriends.concat([name]),
        input: ''
      }
    })
  }
  render() {
    return (
      <div>
      <input type="text" placeholder="new friend" value={this.state.input} onChange={this.changeInputState}/>
      <button onClick={ this.addFriend}>submit</button><br/>
      <button onClick= {this.clearAll}>clear all</button>
      <ActiveFriendsList list={this.state.activeFriends} onRemove={this.handleRemove} onDeactivate={this.handleDeactivate}/>
      <InActiveFriendsList list={this.state.inactiveFriends} onActivate={this.handleActivate}/>
      </div>
    );
  }
}
function ActiveFriendsList(props){

    return(
      <div>
      <h1>Active Friends</h1>
      <ul>
      {
        props.list.map((friend) =>(
          <li key={friend}>{friend}  <button onClick={() => props.onRemove(friend)}>remove</button><button onClick={() => props.onDeactivate(friend)}>Deactivate</button>
          </li>

        ))
      }
      </ul></div>
    )
  }

  function InActiveFriendsList(props){

      return(
        <div>
        <h1>InActive Friends</h1>
        <ul>
        {
          props.list.map((friend) =>(
            <li key={friend}>{friend}  <button onClick={() => props.onActivate(friend)}>Activate</button>
            </li>

          ))
        }
        </ul></div>
      )
    }
export default App;
