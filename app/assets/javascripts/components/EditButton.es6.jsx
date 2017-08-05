class EditButton extends React.Component {
  render () {
    return (
      <div className="right-align">
        <a
          href={`/bills/${this.props.billId}/edit`}
        >
          <i className="material-icons">edit</i>
        </a>
      </div>
    );
  }
}
