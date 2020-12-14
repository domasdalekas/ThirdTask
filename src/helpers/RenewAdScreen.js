import React, {Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {editAD,showAll} from "../../store/actions/actions"

class RenewAdScreen extends Component {
  componentDidMount() {
    this.props.showAll()
}
  constructor(props) {
    super(props);
    this.state= {
      name : '',
      text: '',
    }
  }
  makeChange(name) {
    this.setState({name})

  }
  textChange(text) {
    this.setState({text})
  }
render() {
    const {ads} =this.props;
    return (
        <View style={styles.container}>
        <Text style={styles.title}>
        Renew
        </Text>
        <ScrollView style={styles.adsContainer}>
                {ads.ads.map((ad,index)=>(
                    <View style={styles.ads} key={index}>
                        <View style={{flex:1,justifyContent:'center'}}>
                        <Text style={styles.make}>
                          {ad.name} {ad.text}      
                        </Text>
                        <TextInput
                         style={styles.input}
                          value={this.state.name}
                          placeholder="Name"
                         onChangeText={(text) => this.makeChange(text)}
                          />
                        <TextInput
                          style={styles.input}
                          value={this.state.text}
                          placeholder="Text"
                          onChangeText={(text) => this.textChange(text)}
                        />
                        </View>
                        <View style={styles.addButtonContainer}>
                            <TouchableOpacity onPress={()=>this.props.editAD(this.state.name,this.state.text,ad.id)}
                            style={styles.addButton}
                            >
                            <View style={styles.addButton}>
                            <Text style={styles.addButtonText}>
                             EDIT
                            </Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                      
                    </View>
                ))}
           </ScrollView>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
    },
    inputContainer: {
      backgroundColor: '#1eacb0',
      borderTopColor: '#1eacb0',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100,
      width: 200,
    },
    inputWrapper: {
      flex: 2,
    },
    input: {
      height: 80,
      padding: 7,
      backgroundColor: '#1eacb0',
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
      width: 200,
      height: 100,
      backgroundColor: '#1eacb0',
      marginLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
    },
    addButtonContainer: {
      flex: 4,
      justifyContent: 'center',
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
  export default connect(mapStateToProps,{showAll,editAD})(RenewAdScreen);