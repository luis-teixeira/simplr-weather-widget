// CityHeader

import React from 'react';
import City from '../../containers/City';
import styles from './styles.css';
import plus from './plus.svg';

const uid = () => Math.random().toString(34).slice(2);

const Citys = ( props ) => {
  const { citys, onAddAction } = props;
  const onAdd = () => { onAddAction( {id:uid()} ); };

  const addBtn = (props.citys.length < 3) ? (
    <button onClick={onAdd} className={`${styles.addCity} btn-add--city`}>
      <img src={plus} alt="add more" />
    </button>) : ('');

  return(
    <div>
      { citys.map( (city,i) =>
        <City key={city.id}
          index={i}
          {...city} />
      )}
      {addBtn}
    </div>
  );
};

Citys.propTypes = {
  citys: React.PropTypes.array,
};

export default Citys;
