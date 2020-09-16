import Inferno from 'inferno'
import Component from 'inferno-component'

import styles from "./styles.scss";

class NotFound extends Component {
  render () {
    return (
      <div className={styles.root}>
        <h1>
          404! Page Not Found!
        </h1>
      </div>
    )
  }
}

export default NotFound;
