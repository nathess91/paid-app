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
    // MM/DD
    formatDate = (date) => {
      let d = new Date(date).toLocaleDateString('en-US', {
        day : 'numeric',
        month : 'numeric',
        timeZone: 'UTC'
      });
      return d;
    }

    formatDateWithYear = (date) => {
      let d = new Date(date).toLocaleDateString('en-US', {
        day : 'numeric',
        month : 'numeric',
        year : 'numeric',
        timeZone: 'UTC'
      });
      return d;
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
      let total = (billMinAmt - amounts.reduce((amt, sum) => { return sum += amt; }, 0));

      return total <= 0 ? 0 : total;
    }

    getTotalDebt = () => {
      let billAmounts = bills.map((bill, index) => {
        return (parseInt(bill.total_amount));
      });
      return billAmounts.reduce((billAmount, sum) => { return sum += billAmount; }, 0);
    }

    inputVisibility = (e, state) => {
      e.preventDefault();
      const hiddenInputs = document.getElementsByClassName('payment-form');

      for (let i = 0; i < hiddenInputs.length; i++) {
        if (state === 'visible') {
          hiddenInputs[i].classList.remove('hidden');
        } else if (state === 'hidden') {
          hiddenInputs[i].classList.add('hidden');
        }
      }
    }

    handleLogPaymentClick = (e) => {
      e.preventDefault();
      inputVisibility(e, 'visible');
      // const hiddenInputs = document.getElementsByClassName('payment-form');

      // for (let input in hiddenInputs) {
      //   hiddenInputs[input].classList.remove('hidden');
      // }

      // for (let i = 0; i < hiddenInputs.length; i++) {
      //   hiddenInputs[i].classList.remove('hidden');
      // }

      let amountPaid = this.amountInputBox;
      let datePaid = this.dateInputBox;

      console.log('my amount paid: ', amountPaid);
      console.log('the date paid: ', datePaid);

      // empty out the text box in this component
      // this.inputBox.value = '';
    }

    const billData = this.props.bills.map((bill, index) => {
      return (
        <div key={index} className="col s12 m7">
          <div className="card horizontal">
            <div className="card-content card-left">
              <p className="bold center-align">{formatDate(bill.due_date)}</p>
              <div className="center-align margin-top-75">
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
                    <EditButton billId={bill.id} />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m4">
                    <p><span className="bill-number">${amountLeftToPay(this.props.payments, bill.id, bill.min_amount_due)}</span> {'remaining to pay'}</p>
                    <p><span className="bill-number">${getAmountPaid(this.props.payments, bill.id)}</span> {`paid on ${formatDate(getDatePaid(this.props.payments, bill.id))}`}</p>
                  </div>
                  <div className="col s12 m4">
                    <p><span className="bill-number">${bill.min_amount_due}</span> {'min. amount due'}</p>
                    <p>{'suggested amount'}</p>
                  </div>
                  <div className="col s12 m4">
                    <p><span className="bill-number">${remainingAmount(this.props.payments, bill.id, bill.total_amount)}</span> {'total debt remaining'}</p>
                    <p><span className="bill-number">{parseInt(bill.apr)}{'% APR'}</span> {`exp. ${formatDateWithYear(bill.promo_apr_exp_date)}`}</p>
                  </div>
                </div>
                <div className="row flex">
                  <div className="col s3 hidden payment-form" id={bill.id}>
                    <label className="bold label">{'PAYMENT AMOUNT'}</label>
                    <input
                      type="text"
                      className="validate bottom-align"
                      ref={(input) => this.amountInputBox = input}
                    />
                  </div>
                  <div className="col s3 hidden payment-form" id={bill.id}>
                    <label className="bold label">{'DATE'}</label>
                    <input
                      type="text"
                      className="validate datepicker bottom-align"
                      ref={(input) => this.dateInputBox = input}
                    />
                  </div>
                  <div className="col s3 bottom-align hidden payment-form" id={bill.id}>
                    <a
                       className="waves-effect waves-light btn btn-cancel"
                       onClick={(e) => inputVisibility(e, 'hidden')}
                    >
                       {'CANCEL'}
                    </a>
                  </div>
                  <div className="col s3 bottom-align">
                    <a
                      className="waves-effect waves-light btn"
                      onClick={(e) => handleLogPaymentClick(e)}
                    >
                      {'LOG PAYMENT'}
                    </a>
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
