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
    greet = () => {
      const hours = new Date().getHours();
      if (hours > 12) {
        return 'Good Afternoon,';
      } else {
        return 'Good Morning,';
      }
    }
    const firstName = this.props.user.first_name;
    return (
      <div className="container">
        <p>{getDate()}</p>
        <h3>{`${greet()} ${firstName}`}</h3>
        <Bills bills={this.props.bills} />
      </div>
    );
  }
}
