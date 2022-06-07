import React from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';

import {colors} from '../utils/styleref';
import {styles} from '../utils/styleGuide';

function HomeHeader({title}) {
  return (
    <View style={styles.homeHeaderContainer}>
      <View style={styles.homeHeaderLeft}>
        <Text
          numberOfLines={2}
          style={[styles.h3, {marginLeft: 15, color: colors.white}]}>
          {title}
        </Text>
      </View>
    </View>
  );
}

HomeHeader.propTypes = {
  title: PropTypes.string,
};

export default HomeHeader;
