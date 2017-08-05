// class Dashboard extends React.Component {
//   render () {
//     getDate = () => {
//       let today = new Date().toLocaleDateString('en-US', {
//         weekday: 'long',
//         month: 'long',
//         day: 'numeric',
//         year: 'numeric',
//       });
//       return today.toUpperCase();
//     }
//     const { bills, user } = this.props;
//     greet = () => {
//       const hours = new Date().getHours();
//       if (hours > 12) {
//         return 'Good Afternoon,';
//       } else {
//         return 'Good Morning,';
//       }
//     }
//     const firstName = user.first_name;
//     return (
//       <div className="container">
//         <p>{getDate()}</p>
//         <h3>{`${greet()} ${firstName}`}</h3>
//         <Bills bills={bills} />
//       </div>
//     );
//   }
// }

const Dashboard = React.createClass ({
getInitialState(){
  return {bills: [], current_user: []};
},

componentDidMount() {
  // {this.setState({ bills: this.props.bills})};
  {this.setState({ current_user: this.props.current_user})};
  // let bills = this.props.bills;
  var current_user = this.props.current_user;
  console.log('hey were in dashboard', current_user);
},

getDate() {
  let today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  return today.toUpperCase();
},

greet() {
  const hours = new Date().getHours();
  if (hours > 12) {
    return 'Good Afternoon,';
  } else {
    return 'Good Morning,';
  }
},

  render() {
  // let bills = this.props.bills;
  let current_user = this.props.current_user;
  // const firstName = user.first_name;
  // <h3>{`${greet()} ${firstName}`}</h3>
  // <p>{this.getDate()}</p>
    return (
      <div className="container">
      <h1>Welcome {current_user.first_name}</h1>
      <p>here are your bills:</p>
      <Bills current_user={this.props.current_user}/>
      </div>
      )
     }
  });
