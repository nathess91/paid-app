class Bills extends React.Component {
  render () {
    const billData = this.props.bills.map((bill, index) => {
      return (
        <div className="col s12 m7">
        <div className="card horizontal">
          <div className="card-content">
            <p>{bill.due_date}</p>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>{bill.name.toUpperCase()}</p>
            </div>
          </div>
        </div>
        </div>
      );
    });
    return (
      <div className="container">
        {billData}
      </div>
    );
  }
}
