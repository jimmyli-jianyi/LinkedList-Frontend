import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../../containers/Header';
import { Link } from 'react-router-dom';
import './style.css';

export default class Profile extends Component {
  render() {
    let displayProfile;
    const {
      first_name,
      last_name,
      photo,
      current_company
    } = this.props.currentUser;
    if (this.props.match.params.username === this.props.currentUser.username) {
      displayProfile = (
        <div className="Profile">
          <img className="Profile-Pic" src={photo} alt="#" />
          <div className="Profile-Details">
            <h2>
              {first_name} {last_name}
            </h2>
            <h3>Employed by @{current_company}</h3>
            <div>
              <div className="edit">
                <Link to="/edit">Edit</Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      const {
        first_name,
        last_name,
        photo,
        current_company
      } = this.props.userProfile;

      displayProfile = (
        <div>
          <img src={photo} alt="#" />
          <h2>
            {first_name} {last_name}
          </h2>
          <h3>
            <s>@{current_company}</s>
          </h3>
        </div>
      );
    }
    return (
      <div>
        <Header />
        <div className="feed">
          <h1>My Profile</h1>
          {displayProfile}
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  currentUser: PropTypes.object,
  userProfile: PropTypes.object
};
