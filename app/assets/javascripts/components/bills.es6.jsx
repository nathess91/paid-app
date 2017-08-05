// class Bills extends React.Component {
//   render () {
//     const billData = this.props.bills.map((bill, index) => {
//       return (
//         <div className="col s12 m7">
//         <div className="card horizontal">
//           <div className="card-content">
//             <p>{bill.due_date}</p>
//           </div>
//           <div className="card-stacked">
//             <div className="card-content">
//               <p>{bill.name.toUpperCase()}</p>
//             </div>
//           </div>
//         </div>
//         </div>
//       );
//     });
//     return (
//       <div className="container">
//         {billData}
//       </div>
//     );
//   }
// }

const Bills = React.createClass ({
getInitialState(){
  return {bills: []};
},

componentDidMount() {
  // {this.setState({user: this.props.current_user})};
  $.getJSON('/api/v1/bills.json',(response)=>
    {this.setState({ bills: response })

    console.log(response)
  });
},

render () {
  // console.log('render bills state',this.state.bills);
  // console.log('user render here',this.props.current_user);
  const billData = this.state.bills.map((bill, index) => {
    if(bill.user_id == this.props.current_user.id){
      return (
        <div className="col s12 m7" key={index}>
            <p>{bill.due_date}</p>
            <p>{bill.name.toUpperCase()}</p>
        </div>
      );
    }
  });
  console.log('render bills state',this.state.bills);

  console.log('bill data',billData)
  return (
    <div className="container">
      {billData}
    </div>
  );
}
});
