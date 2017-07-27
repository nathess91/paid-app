class NavigationMenu extends React.Component {
  render () {
    return (
      <div className="navbar-fixed">
         <nav>
           <div className="container nav-wrapper">
             <a href="/" className="brand-logo">
              <img src="http://i.imgur.com/Pk5OPNz.png" width="55%" />
             </a>
             <ul className="right hide-on-med-and-down">
               <li><a href="/bills/new">{ 'Add New Bill' }</a></li>
               <li><a href="/logout">{ 'Log Out' }</a></li>
             </ul>
           </div>
         </nav>
       </div>
    );
  }
}
