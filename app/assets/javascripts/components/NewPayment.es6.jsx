class NewPayment extends React.Component {
  render () {

    getInitialState = () => {
     return {
        payments: this.props.payments,
        payment: {
          amount_paid: '',
          date_paid: '',
          user_id: this.props.user_id,
          bill_id: this.props.bill_id
        },
        errors: {},
      }
    }

    handleSubmit = (e) => {
      console.log('click');
      // $.ajax({
      //   method: 'POST',
      //   data: {
      //     payment: this.state.payment,
      //   },
      //   url: '/payments.json',
      //   success: function(res) {
      //     let newPaymentList = this.state.payments;
      //     newPaymentList.push(res);
      //     this.setState({
      //       payments: newPaymentList,
      //       payment: {
      //         amount_paid: '',
      //         date_paid: '',
      //         user_id: '',
      //         bill_id: ''
      //       },
      //       errors: {}
      //     });
      //   },
      //   error: function(res) {
      //     this.setState({errors: res.responseJSON.errors})
      //   }
      // });
    }

    handleAmountChange = (e) => {
      let paymentAmount = e.target.value;
      this.setState({
        payment: {
          amount_paid: paymentAmount,
        }
      });
     console.log('new payment amount?', this.props.payment);
    }

    handleDateChange = (e) => {
    //  let newPayment = this.state.payment;
    //  newPayment.date_paid = e.target.value;
    //  this.setState({payment: newPayment});
    console.log(e.target.value);
    }

    return (
      <div>
        <form
          className="row flex"
        >
          <div className="col s3">
            <label className="bold label">
              {'PAYMENT AMOUNT'}
            </label>
            <input
              type="text"
              name="amount_paid"
              className="validate bottom-align"
              onChange={(e) => handleAmountChange(e)}
            />
          </div>
          <div className="col s3">
            <label className="bold label">{'DATE'}</label>
            <input
              type="text"
              name="date_paid"
              className="validate datepicker bottom-align"
              onChange={(e) => handleDateChange(e)}
            />
          </div>
          <div className="col s3 bottom-align hidden">
            <a
               className="waves-effect waves-light btn btn-cancel"
            >
               {'CANCEL'}
            </a>
          </div>
          <div className="col s3 bottom-align">
            <a
              className="waves-effect waves-light btn"
              onClick={(e) => handleSubmit(e)}
            >
              {'SUBMIT'}
            </a>
          </div>
        </form>
      </div>
    );
  }
}
