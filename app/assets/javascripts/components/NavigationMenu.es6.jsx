class NavigationMenu extends React.Component {
  render () {
    return (
      <div className="navbar-fixed">
         <nav>
           <div className="nav-wrapper">
             <a href="/" className="brand-logo">{ 'Paid' }</a>
             <ul className="right hide-on-med-and-down">
               <li><a href="#">{ 'Add New Bill' }</a></li>
               <li><a href="/logout">{ 'Log Out' }</a></li>
             </ul>
           </div>
         </nav>
       </div>
    );
  }
}
