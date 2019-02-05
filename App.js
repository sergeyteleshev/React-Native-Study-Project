import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {ImageCard} from "./components/ImageCard";
import {Header} from "./components/Header";
import {w} from "./helpers/consts";

export default class App extends React.Component {
  state = {
      headerTitle: "STAR GATE",
      data: [],
  };

  componentDidMount = async() => {
    try
    {
      const response = await fetch("https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json");
      const data = await response.json();
      this.setState({data});
    }
    catch (e)
    {
      throw e;
    }
  };

  render() {
    const {scrollView} = styles;
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff', color: "#fff"}}>
          <Header headerTitle={"СТЕЛИЧ"}/>
          <ScrollView>
            <View style={scrollView}>
              {
                this.state.data.length > 0 ? this.state.data.map((film) => {
                  return <ImageCard data={film} key={film.id}/>;
                }) : null
              }
            </View>
          </ScrollView>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20,
    width: w
  }
});
