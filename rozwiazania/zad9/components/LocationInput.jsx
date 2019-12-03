import React from 'react';

class LocationInput extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleValueChange(event){
    this.setState({ value: event.target.value });
  }
  onSubmit(){
    this.props.onSubmit(this.state.value);
    this.setState({ value: ''});
  }

  render() {
    return (
      <div className="columns">
      <div className="column is-3">
        <div className="field has-addons">
          <p className="control">
            <input 
              className="input" 
              onChange={e => this.handleValueChange(e)}
              value={this.state.value}
              />
          </p>
          <p className="control">
            <button 
              className="button"
              onClick={() => this.onSubmit()}
            >
              Szukaj
            </button>
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default LocationInput;
