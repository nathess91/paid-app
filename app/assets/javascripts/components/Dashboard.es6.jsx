class Dashboard extends React.Component {
  getDate = () => {
    let today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    return today.toUpperCase();
  }
  render () {
    const { bills, user } = this.props;
    greet = () => {
      const hours = new Date().getHours();
      if (hours > 12) {
        return 'Good Afternoon,';
      } else {
        return 'Good Morning,';
      }
    }
    const firstName = user.first_name;
    return (
      <div className="container">
        <p>{this.getDate()}</p>
        <h3>{`${greet()} ${firstName}`}</h3>
        <Bills bills={bills} />
      </div>
    );
  }
}
