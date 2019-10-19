'use strict';

const e = React.createElement;

class ToggleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showForm: false};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      showForm: !state.showForm
    }));

      //const formStyle = document.getElementById('form').style;
      //this.state.showForm ? formStyle.display = 'block' : formStyle.display = 'none';
  }

  render() {
    return e(
      'button', { onClick: () => this.handleClick},
      'Add New Book'
    );
  }
}

const addNewBtnContainer = document.querySelector('#newbook-btn-container');
ReactDOM.render(e(ToggleForm), addNewBtnContainer);
