import { memo } from 'react';
import PropTypes from 'prop-types';
import { cn as bem } from '@bem-react/classname';
import { numberFormat, plural } from '../../utils';
import './style.css';
import {NavLink} from "react-router-dom";

function BasketTool({ sum=0, amount=0, onOpen=() => {} }) {
  const cn = bem('BasketTool');
  return (
    <div className={cn()}>
      <div className={cn('menu')}>
        <NavLink className={cn('link')} to={'/'}>Главная</NavLink>
      </div>
      <div className={cn('info')}>
        <span className={cn('label')}>В корзине:</span>
        <span className={cn('total')}>
        {amount
          ? `${amount} ${plural(amount, {
            one: 'товар',
            few: 'товара',
            many: 'товаров',
          })} / ${numberFormat(sum)} ₽`
          : `пусто`}
      </span>
        <button onClick={onOpen}>Перейти</button>
      </div>

    </div>
  );
}

BasketTool.propTypes = {
  onOpen: PropTypes.func.isRequired,
  sum: PropTypes.number,
  amount: PropTypes.number,
};


export default memo(BasketTool);
