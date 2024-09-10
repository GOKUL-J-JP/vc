// function Main({fullname}) {
//     return (
//         <h1>Hello {fullname }</h1>
//     );
// }

// export default Main;

import PropTypes from 'prop-types'

const Main = props => {
  return (
      <div>
          <h1>Heloo {props.fullname}</h1>
          <p>Mobile.No { props.phone}</p>
     </div>
  )
}

Main.propTypes = {
    fullname: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
}

export default Main