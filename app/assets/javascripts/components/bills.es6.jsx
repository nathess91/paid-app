class Bills extends React.Component {
  render () {
    const billData = this.props.bills.map((bill, index) => {
      return (
        <p key={index}>{bill.name}</p>
      );
    });
    return (
      <div>
        {billData}
      </div>
    );
  }
}
