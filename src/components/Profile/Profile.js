import React, { useState } from "react";
import "./Profile.css";

const Profile = ({ toggleModal, loadUser, user }) => {
  const { name, age, pet, id } = user;
  const initialFormState = {
    id,
    name,
    age,
    pet
  };

  const [formState, setFormState] = useState(initialFormState);

  const onFormChange = ({ target }) => {
    const { name, value } = target;
    name === "username" && setFormState({ ...formState, name: value });
    name === "age" && setFormState({ ...formState, age: value });
    name === "pet" && setFormState({ ...formState, pet: value });
  };

  const onFormSubmit = data => {
    fetch(`http://localhost:3001/profile/${id}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Authorization": window.sessionStorage.getItem(
          "token"
        )
      },
      body: JSON.stringify({ formInput: data })
    })
      .then(responseData => {
        if (responseData.status === 200 || responseData.data === 304) {
          toggleModal();
          loadUser(formState.id);
        }
      })
      .catch(err => {
        console.log("Error while updating post");
      });
  };
  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-8 0">
          <img
            src="http://tachyons.io/img/logo.jpg"
            className="h3 w3 dib"
            alt="avatar"
          />
          <h1>{formState.name}</h1>
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
                value={formState.name}
                onChange={onFormChange}
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
                value={formState.age || 0}
                onChange={onFormChange}
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
                value={formState.pet || ""}
                onChange={onFormChange}
              />
            </div>
            <div
              className="mt4"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <button
                className="b pa2 ph3 hover-white w-40 ba b--black-20 bg-light-blue grow pointer"
                onClick={() => onFormSubmit(formState)}
              >
                Save
              </button>
              <button
                className="b pa2 ph3 hover-white w-40 ba b--black-20 bg-light-red grow pointer"
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </main>
        <div className="modal-close" onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
};

export default Profile;
