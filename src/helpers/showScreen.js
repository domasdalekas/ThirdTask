import React, {Component} from 'react';
import {View,Text,StyleSheet,ScrollView,Animated} from 'react-native';
import {connect} from 'react-redux';
import {showAll} from './../../store/actions/actions'
import 'react-native-gesture-handler';

class showScreen extends Component {
  constructor() {
    super()
    this.animated=new Animated.Value(0);
  }
  animate() {
    this.animated.setValue(0);
    Animated.timing(this.animated,{toValue:1,duration:5000,useNativeDriver:true,})
    .start();
  }
    componentDidMount() {
        this.props.showAll();
    }
    render(){ 
        const {ads}= this.props;
        
       
        return (
           <View style={styles.container}>
               <Text style={styles.title}>
                   ADS
               </Text>
               <ScrollView style={styles.adsContainer}>
                    {ads.ads.map((ad,index)=>(
                        <View style={styles.ads} key={index}>
                            <Text style={styles.make}>
                              {ad.name} {ad.text}      
                            </Text>
                        </View>
                    ))}
               </ScrollView>
           </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ads: state.ads,
    };
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    adsContainer: {
      borderTopWidth: 3,
      borderTopColor: '#ddd',
      flex: 1,
    },
    ads: {
      padding: 20,
      backgroundColor: '#1eacb0',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 5,
    },
    make: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    model: {
      fontSize: 14,
      color: '#999',
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });
export default connect(mapStateToProps,{showAll})(showScreen);