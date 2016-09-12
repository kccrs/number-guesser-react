
import React from 'react';

import Messages from './Messages';
import UserInputs from './UserInputs';
import ActionButton from './ActionButton';

class Application extends React.Component {
  constructor() {
    super();
  }

  render () {
    return (
      <section className="Application">
        <UserInputs />

      </section>
    )
  }
}

export default Application;
