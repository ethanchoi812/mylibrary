import React from 'react'; 

class NewBookBtn extends React.Component {
  constructor(props){
    super(props);
    //this.state = {showForm: false}
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event){
    event.preventDefault();
    this.props.onToggleForm();
  }

  render(){
  return (
    <div id="newbook-btn-container">
        <button onClick={this.handleClick}>Add New Book</button>
    </div>
  )}
}     

export default NewBookBtn;