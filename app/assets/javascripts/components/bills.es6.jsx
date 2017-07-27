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

    getAmountPaid = (payments, billId) => {
      for (let key in payments) {
        if (payments[key]['bill_id'] == billId) {
          return payments[key]['amount_paid'];
        }
      }
    }

    getDatePaid = (payments, billId) => {
      for (let key in payments) {
        if (payments[key]['bill_id'] == billId) {
          return payments[key]['date_paid'];
        }
      }
    }

    remainingAmount = (payments, billId, billTotalAmount) => {
      let amounts = [];
      for (let key in payments) {
        if (payments[key]['bill_id'] == billId) {
          amounts.push(parseInt(payments[key]['amount_paid']));
        }
      }
      return (billTotalAmount - amounts.reduce((amt, sum) => {
        return sum += amt;
      }, 0));
    }

    amountLeftToPay = (payments, billId, billMinAmt) => {
      let amounts = [];
      for (let key in payments) {
        if (payments[key]['bill_id'] == billId) {
          amounts.push(parseInt(payments[key]['amount_paid']));
        }
      }
      let total = (billMinAmt - amounts.reduce((amt, sum) => {
        return sum += amt;
      }, 0));
      return total <= 0 ? 0 : total;
    }

    getTotalDebt = () => {
      let billAmounts = bills.map((bill, index) => {
        return (parseInt(bill.total_amount));
      });
      return billAmounts.reduce(function(billAmount, sum) { return sum += billAmount; }, 0);
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
                <div className="row">
                  <div className="col s12 m4">
                    <p>{`$${amountLeftToPay(this.props.payments, bill.id, bill.min_amount_due)} remaining to pay`}</p>
                    <p>{`$${getAmountPaid(this.props.payments, bill.id)} paid on ${getDatePaid(this.props.payments, bill.id)}`}</p>
                  </div>
                  <div className="col s12 m4">
                    <p>{`$${bill.min_amount_due} min. amount due`}</p>
                    <p>{'suggested amount'}</p>
                  </div>
                  <div className="col s12 m4">
                    <p>{`$${remainingAmount(this.props.payments, bill.id, bill.total_amount)} total debt remaining`}</p>
                    // 0% APR exp. 5/18
                    <p>{`${bill.promo_apr_exp_date}`}</p>
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
