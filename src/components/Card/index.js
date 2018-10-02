import React, { Component } from 'react';
import './style.css';

export default class Card extends Component {
  render() {
    const { title, company, salary, equity } = this.props;

    if (this.props.category === 'companies') {
      const logo =
        this.props.logo ||
        'https://www.rithmschool.com/assets/logos/300logo-e647a12a86a37452242b8a21b69d9d1dc4062424c1aba75e17ca49ba66787120.jpg';
      return (
        <div className="Card">
          <img src={logo} alt="placeholder" />
          <div className="Card-Container">
            <div className="Card-Details">
              <div>{this.props.name}</div>
              <strong>@{this.props.handle}</strong>
            </div>
          </div>
        </div>
      );
    }
    if (this.props.category === 'users') {
      const profilePic =
        this.props.photo ||
        'data:image/jpeg;base64,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';
      return (
        <div className="Card">
          <img src={profilePic} alt="placeholder" />
          <div className="Card-Container">
            <div className="Card-Details">
              <div>
                {this.props.first_name} {this.props.last_name}
              </div>
              <strong>@{this.props.username}</strong>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="Card">
        <img
          src="data:image/png;base64,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"
          alt="placeholder"
        />
        <div className="Card-Container">
          <div className="Card-Details">
            <div>
              {title} <strong>@{company}</strong>
            </div>
            {salary} | {equity}
          </div>
          <button className="Card-Button">Apply</button>
        </div>
      </div>
    );
  }
}
