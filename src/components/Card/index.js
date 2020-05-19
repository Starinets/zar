import React from 'react';
import s from './style.module.scss';

class Card extends React.Component {

  state = {
    done: false
  }

  handleCardClick = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  }

  render() {
    const { eng, rus, img } = this.props;
    const { done } = this.state;

    const cardClass = [s.card];
    if (done) {
      cardClass.push(s.done);
    }

    return (
      <article className={cardClass.join(' ')} onClick={this.handleCardClick}>
        <div className={s.cardInner}>
          <div className={s.cardFront}>
            <img className={s.img} src={img} alt="Изображение" />
            {eng}
          </div>
          <div className={s.cardBack}>
            {rus}
          </div>
        </div>
      </article>
    );
  }
}

export default Card;
