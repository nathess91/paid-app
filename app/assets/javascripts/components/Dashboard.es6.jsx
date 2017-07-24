class Dashboard extends React.Component {


  render () {
    greet = () => {
      const hours = new Date().hours;
      if (hours > 12) {
        return 'Good Afternoon,';
      } else {
        return 'Good Morning,';
      }
    }
    const firstName = this.props.user.first_name;
    return (
      <div className="container">
        <h3>{greet ``} {firstName}</h3>
        <Bills bills={this.props.bills} />
      </div>
    );
  }
}
