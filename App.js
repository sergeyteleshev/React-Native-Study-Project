import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ImageCard} from "./ImageCard";

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
    const {header, headerText, scrollView} = styles;
    return (
        <View>
          <View style={header}>
            <Text style={headerText}>{this.state.headerTitle}</Text>
          </View>
          <ScrollView>
            <View style={scrollView}>
              {
                this.state.data.length > 0 ? this.state.data.map((film) => {
                  return <ImageCard data={film} key={film.id}/>;
                }) : null
              }
            </View>
          </ScrollView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#30d0fe",
    height: 116,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingTop: 50,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
  },
  headerText:
  {
    color: "#fff",
    fontSize: 28,
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
