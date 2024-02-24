import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const EmailButton = () => {
  return (
    <button className="mail__btn click">
    <FontAwesomeIcon icon="shopping-cart" />
    {/* <i *** DELETE AFTER *** className="fas fa-envelope"></i> */}
  </button>
  )
}

export default EmailButton