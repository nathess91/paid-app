class Bills extends React.Component {
  render () {
    categoryIcon = (billCategory) => {
      if (billCategory == "recurring") {
        return 'loop';
      } else {
        return 'repeat_one'
      }
    }

    formatMoney = (n) => {
      return "$" + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
    }
    const billData = this.props.bills.map((bill, index) => {
      return (
        <div key={index} className="col s12 m7">
          <div className="card horizontal">
            <div className="card-content card-left">
              <p className="bold">{bill.due_date}</p>
              <br />
              <div className="center-align">
                <i className="material-icons medium">{categoryIcon(bill.category)}</i>
              </div>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div className="row">
                  <div className="col s10">
                    <p className="bold">{bill.name.toUpperCase()}</p>
                  </div>
                  <div className="col s2">
                    <p className="right-align">
                      <i className="material-icons">edit</i>
                    </p>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col s12 m4">
                    <p>{'remaining to pay'}</p>

                  </div>
                  <div className="col s12 m4">
                    <p>{`$${bill.min_amount_due} min. amount due`}</p>
                    <p>{'suggested amount'}</p>
                  </div>
                  <div className="col s12 m4">
                    <p>{`$${bill.total_amount} total debt remaining`}</p>
                    <p>{bill.promo_apr_exp_date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      );
    });


    return (
      <div className="">
        {billData}
      </div>
    );
  }
}
