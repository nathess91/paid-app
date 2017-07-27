class Dashboard extends React.Component {
  render () {
    getDate = () => {
      let today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      return today.toUpperCase();
    }
    const { bills, user } = this.props;
    getTotalDebt = () => {
      let billAmounts = bills.map((bill, index) => {
        return (parseInt(bill.total_amount));
      });
      return billAmounts.reduce(function(billAmount, sum) { return sum += billAmount; }, 0);
    }
    greet = () => {
      const hours = new Date().getHours();
      if (hours >= 12) {
        return 'Good Afternoon,';
      } else {
        return 'Good Morning,';
      }
    }
    const firstName = user.first_name;
    return (
      <div className="container margin-top-75">
        <p className="bold">{getDate()}</p>
        <h3>{`${greet()} ${firstName}.`}</h3>
        <p>{`Your total debt is $${getTotalDebt()}.`}</p>
        <Bills bills={bills} />
      </div>
    );
  }
}
