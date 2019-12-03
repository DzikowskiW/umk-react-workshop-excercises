import React from 'react';

class LocationInput extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-3">
          <div className="field has-addons">
            <p className="control">
              {/* miejsce na input */}
            </p>
            <p className="control">
              {/* miejsce na button */}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LocationInput;
