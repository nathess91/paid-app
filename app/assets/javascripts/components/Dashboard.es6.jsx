class Dashboard extends React.Component {
  render () {

    const { bills, user, payments } = this.props;

    getDate = () => {
      let today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      return today.toUpperCase();
    }

    getTotalDebt = () => {
      let billAmounts = bills.map((bill, index) => {
        return (parseInt(bill.total_amount));
      });
      return billAmounts.reduce(function(billAmount, sum) { return sum += billAmount; }, 0);
    }

    greet = () => {
      const hours = new Date().getHours();
      if (hours >= 12 && hours < 17) {
        return 'Good afternoon,';
      } else if (hours >= 17) {
        return 'Good evening,';
      } else {
        return 'Good morning,';
      }
    }

    return (
      <div className="container margin-top-75">
        <p className="bold">{getDate()}</p>
        <h3>{`${greet()} ${user.first_name}.`}</h3>
        <p className="margin-bottom-75">{`Your total debt is $${getTotalDebt()}.`}</p>
        <Bills bills={bills} payments={payments} />
      </div>
    );
  }
}
