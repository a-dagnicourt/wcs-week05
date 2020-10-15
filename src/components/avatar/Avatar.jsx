import React from 'react';
import './Avatar.css';

class Avatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
    };
  }

  render() {
    return (
      <div className={this.state.star ? 'card star' : 'card'}>
        <img
          onClick={this.props.shout}
          src={
            this.props.image
              ? this.props.image
              : 'https://www.drupal.org/files/issues/default-avatar.png'
          }
          alt={this.props.firstName}
        />
        <div className='cardName'>
          <h2>{this.props.firstName}</h2>
          <h3>{this.props.lastName}</h3>
        </div>
        <div className='feats'>
          <img
            onClick={(e) => {
              const newStarStatus = !this.state.star;
              this.setState({
                star: newStarStatus,
              });
            }}
            className={!this.state.star ? 'grayscale' : undefined}
            src='https://vignette.wikia.nocookie.net/fantendo/images/4/46/NSMBU_Star.png/'
            alt='Mario Star'
          />
        </div>
      </div>
    );
  }
}

export default Avatar;
