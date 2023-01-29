import React, { useState } from "react";
import styles from "./card.module.css";

const Card = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    photo: "",
    bio: "",
    website: "",
    twitter: "",
    linkedIn: "",
    github: "",
  });
  const handleChange = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "file" ? evt.target.files : evt.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div className={styles.card}>
      <form className="social-card-form">
        <div className="form-group">
          <label htmlFor="name" />
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Name"
            type="text"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="photo" />
          <input
            accept=".jpg, .jpeg, .png"
            className="form-control"
            id="photo"
            name="photo"
            type="file"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio" />
          <textarea
            className="form-control"
            id="bio"
            name="bio"
            placeholder="Enter Bio"
            value={state.bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter" />
          <input
            className="form-control"
            id="twitter"
            name="twitter"
            placeholder="Enter Twitter URL"
            type="text"
            value={state.twitter}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="linkedIn" />
          <input
            className="form-control"
            id="linkedIn"
            name="linkedIn"
            placeholder="Enter LinkedIn URL"
            type="text"
            value={state.linkedIn}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="github" />
          <input
            className="form-control"
            id="github"
            name="github"
            placeholder="Enter GitHub URL"
            type="text"
            value={state.github}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="website" />
          <input
            className="form-control"
            id="website"
            name="website"
            placeholder="Enter Website URL"
            type="text"
            value={state.website}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" />
          <input
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter Email"
            type="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Card;
