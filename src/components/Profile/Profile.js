import React from "react";
import "./Profile.css";

const Profile = ({ toggleModal }) => {
  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-8 0">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib"
            alt="avatar"
          />
          <h1>John Doe</h1>
          <h4>Image Submitted: 5</h4>
          <p>Member since: January</p>
          <hr />
          <div className="measure">
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="username">
                Name
              </label>
              <input
                className="ba pa2 w-100"
                type="text"
                name="username"
                id="username"
                // onChange={this.onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="age">
                Age:
              </label>
              <input
                className="ba pa2 w-100"
                type="age"
                name="age"
                id="age"
                // onChange={this.onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="pet">
                Pet
              </label>
              <input
                className="ba pa2 w-100"
                type="pet"
                name="pet"
                id="pet"
                // onChange={this.onPasswordChange}
              />
            </div>
            <div
              className="mt4"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <button className="b pa2 ph3 hover-white w-40 ba b--black-20 bg-light-blue grow pointer">
                Save
              </button>
              <button className="b pa2 ph3 hover-white w-40 ba b--black-20 bg-light-red grow pointer">
                Cancel
              </button>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Profile;
