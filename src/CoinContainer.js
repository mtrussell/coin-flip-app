import React, { Component } from 'react';
import { choice } from './helpers';
import Coin from './Coin';
import bitcoin from './bitcoin.jpg';
import ethereum from './ethereum.jpg';

class CoinContainer extends Component {
  static defaultProps = {
    sides: [
      {side: 'heads', imgSrc: `${bitcoin}`},
      {side: 'tails', imgSrc: `${ethereum}`}
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    const newCoin = choice(this.props.sides);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (newCoin.side === 'tails' ? 1 : 0)
      };
    });
  }

  handleClick(e) {
    this.flipCoin();
  }
  
  render() {
    return(
      <div>
        <h2>Let's flip a crypto coin!</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, 
          there have been {this.state.nHeads} bitcoins 
          and {this.state.nTails} ethereums.
        </p>
      </div>
    );
  }
}

export default CoinContainer;