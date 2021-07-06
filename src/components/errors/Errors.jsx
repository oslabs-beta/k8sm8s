import React from 'react';

// import PodError from './PodError';
import ErrorsTable from './ErrorsTable';

const MOCK_ERRORS = [
  {
    message: 'OOM error',
    statusCode: 500,
    createdAt: 'June 16 1934',
    severity: 'Bad',
    recommendedActions: 'Get more memory',
    pod: 10000,
  },
  {
    message: 'OOM error',
    statusCode: 404,
    createdAt: 'June 16 1934',
    severity: 'Bad',
    recommendedActions: 'Get more memory',
    pod: 10000,
  },
  {
    message: 'OOM error 2',
    statusCode: 500,
    createdAt: 'June 16 1934',
    severity: 'Bad',
    recommendedActions: 'Get more memory',
    pod: 10000,
  },
  {
    message: 'OOM error 3',
    statusCode: 500,
    createdAt: 'June 16 1934',
    severity: 'Bad',
    recommendedActions: 'Get more memory',
    pod: 10000,
  },
  {
    message: 'OOM error 4',
    statusCode: 500,
    createdAt: 'June 16 1934',
    severity: 'Bad',
    recommendedActions: 'Get more memory',
    pod: 10000,
  },
];

class Errors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
    }
  }

  componentDidMount() {
    // MOCK ERROR WORK FOR TESTING AND DEVELOPMENT:
    this.setState({ errors: MOCK_ERRORS });

    // TODO: use GET request to /errors once route is written on backend.
    // fetch('/errors')
    //   .then(res => res.json())
    //   .then(data => {
    //         // Once FE is connected to BE, we will have some data.
    //         // That data will include the errors we want to save to state.
    //       const newState = { errors: data };
    //       this.setState(newState)
    //   }).catch(err => console.log(err));
  }
  
  render() {
    if (!this.state.errors.length) {
      return (
        <>
          Loading errors, please wait . . . 
        </>
      )
    }

    // const errors = this.state.errors
    //   .map((err, i) => <PodError key={`error${ i }`} {...err} />);

    return (
      <div>
        Errors
        <ErrorsTable data={this.state.errors} />
        {/* {errors} */}
      </div>
    )
  }
}

export default Errors;
