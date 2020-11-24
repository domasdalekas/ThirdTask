import React, {Component,useRef} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Animated,Easing} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {addAd} from '../store/actions/actions'
import uuidV4 from 'uuid/v4'
class addScreen extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name : '',
      text: '',
    }
  }
  
  handleSubmit = () => {
    this.props.addAd(this.state.name, this.state.text,uuidV4());
    this.setState({name:'',text: ''})
  }
  makeChange(name) {
    this.setState({name})

  }
  textChange(text) {
    this.setState({text})
  }
    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.title}>
                        Add Ad
                    </Text>
                    <View style={styles.inputWrapper}>
                    <TextInput
                    style={styles.input}
                    value={this.state.name}
                    placeholder="Name"
                    onChangeText={(text)=>this.makeChange(text)}
                    />
                    <TextInput
                    style={styles.input}
                    value={this.state.text}
                    placeholder="Text"
                    onChangeText={(text)=>this.textChange(text)}
                    />
                    </View>
                    <View style={styles.addButtonContainer}>
                      <Animated.View>
                    <TouchableOpacity onPress={this.handleSubmit}>
                      <View style={styles.addButton}>
                        <Text style={styles.fadingText}>
                          INSERT
                        </Text>
                      </View>
                    </TouchableOpacity>
                    </Animated.View>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
    },
    inputContainer: {
      backgroundColor: '#ffffff',
      borderTopColor: '#ededed',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 40,
      width: 60,
    },
    fadingContainer: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: 'powderblue',
    },
    fadingText: {
      fontSize: 28,
      textAlign: 'center',
      margin: 10,
    },
    inputWrapper: {
      flex: 2,
    },
    input: {
      height: 44,
      padding: 7,
      backgroundColor: '#ededed',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      flex: 1,
      marginBottom: 5,
    },
    addButtonText: {
      fontSize: 24,
      lineHeight: 24,
    },
    addButton: {
      width: 120,
      height: 60,
      backgroundColor: '#6cc900',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    addButtonContainer: {
      flex: 4,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
  const mapStateToProps= (state) => {
    return {
      ads : state.ads,
    };
  };
  export default connect(mapStateToProps,{addAd})(addScreen);