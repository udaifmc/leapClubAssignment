import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {colors} from '../../utils/styleref';
import {items} from '../../utils/constants';
import {shuffle} from '../../utils/functions';
import HomeHeader from '../../components/homeHeader';
import Card from '../../components/card';
import {styles} from '../../utils/styleGuide';

let point = 0;

function Home() {
  const [elements, setElements] = useState(null);
  const [firstItemIndex, setFirstitemIndex] = useState(null);
  const [turns, setTurns] = useState(0);
  const [desable, setDesable] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setElements(shuffle(items));
  }, []);

  const checkResult = (data, index) => {
    setTurns(turns + 1);
    if (elements[firstItemIndex].letter == elements[index].letter) {
      point = point + 1;
      elements[firstItemIndex].active = false;
      elements[index].active = false;
      setElements(elements);
      if (point == items.length / 2) {
        setCompleted(true);
      }
    }
    setDesable(false);
    setFirstitemIndex(null);
    setFirstitemIndex(null);
  };

  const onClickItem = async (data, index) => {
    if (firstItemIndex == null) {
      setFirstitemIndex(index);
    } else {
      setDesable(true);
      await setTimeout(() => checkResult(data, index), 200);
    }
  };

  const suffleItems = () => {
    setFirstitemIndex(null);
    setCompleted(false);
    setDesable(false);
    point = 0;
    setTurns(0);
    setElements(shuffle(items));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryColorDark}
      />
      <HomeHeader title="Match Cards" />
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headertext1}>SCORE</Text>
          <Text style={styles.headertext2}>{point}</Text>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.headertext1}>TURNS</Text>
          <Text style={styles.headertext2}>{turns}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        {elements &&
          elements.map((item, index) => (
            <Card
              key={item.id}
              data={item}
              index={index}
              onClickItem={onClickItem}
              firstSelectedIndex={firstItemIndex}
              disabled={desable}
            />
          ))}
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={suffleItems} style={styles.suffleButton}>
          <Text style={styles.suffletext}>RESHUFFLE</Text>
        </TouchableOpacity>
      </View>
      {completed ? (
        <View style={styles.bannerContainetr}>
          <Text style={styles.bannerText1}>Congratulations</Text>
          <Text style={styles.bannerText2}>
            Your Are Completed in {turns} Turns
          </Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
}
export default Home;
