import React from "react";

const Contact = ({ mainRight, mainLeft }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="contact">
          <div className="contact__image--left">
            <figure className="contact--image--wrapper">
              <img className="image__left" src={mainRight} alt="" />
            </figure>
          </div>
          <div className="contact__info">
            <div className="modal__contact">
              {/*<!-- <i className="fas fa-times modal__exit click" onclick="toggleModal()"></i>  -->*/}
              <h3 className="modal__title modal__title--contact">
                Let's have a chat!
              </h3>
              <h3 className="modal__sub-title modal__sub-title--contact">
                I'm here to help you better your fitness journey.
              </h3>
              <form id="contact__form" onsubmit="contact(event)">
                <div className="form__item">
                  <label className="form__item--label">Name</label>
                  <input className="input" name="user_name" type="text"></input>
                </div>
                <div className="form__item">
                  <label className="form__item--label">Email</label>
                  <input
                    className="input"
                    name="user_email"
                    type="email"
                  ></input>
                </div>
                <div className="form__item">
                  <label className="form__item--label">Message</label>
                  <textarea
                    className="input"
                    name="message"
                    type="text"
                  ></textarea>
                </div>
                <button id="contact__submit" className="form__submit">
                  Send it my way
                </button>
              </form>
              <div className="modal__overlay modal__overlay--loading">
                <i className="fas fa-spinner"></i>
              </div>
              <div className="modal__overlay modal__overlay--success">
                Thanks for the message!
              </div>
            </div>
          </div>
          <div className="contact__image--right">
            <figure className="contact--image--wrapper">
              <img className="image__right" src={mainLeft} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
