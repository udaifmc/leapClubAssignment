import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import {colors} from '../utils/styleref';
import {styles} from '../utils/styleGuide';

function Card({data, index, onClickItem, firstSelectedIndex, disabled}) {
  const [isVisible, setisVisble] = useState(false);

  useEffect(() => {
    if (firstSelectedIndex != null) {
      setisVisble(index == firstSelectedIndex);
    } else {
      setisVisble(false);
    }
  }, [firstSelectedIndex]);

  const onClick = () => {
    setisVisble(true);
    onClickItem(data, index);
  };

  return (
    <TouchableOpacity
      key={data.id}
      disabled={isVisible || disabled || data.active == false}
      onPress={onClick}
      style={[
        styles.cardContainer,
        {backgroundColor: data.active ? colors.offWhite : colors.grayLight},
      ]}>
      {isVisible ? <Text style={styles.cardtext}>{data.letter}</Text> : null}
    </TouchableOpacity>
  );
}

Card.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  onClickItem: PropTypes.func,
  firstSelectedIndex: PropTypes.number,
  disabled: PropTypes.bool,
};

export default Card;
