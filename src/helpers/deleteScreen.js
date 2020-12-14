import React, {Component,useRef,useEffect} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Animated,Button} from 'react-native';
import 'react-native-gesture-handler';
import {connect} from 'react-redux'
import {showAll,deleteAd} from '../../store/actions/actions'


class deleteScreen extends Component{
  constructor() {
    super()
   this.animated=new Animated.Value(0);
  }
  
  animate() {
    this.animated.setValue(0);
    Animated.timing(this.animated,{
      toValue:1,duration:2000,useNativeDriver:true,
    }).start();
  }
  componentDidMount() {
        this.props.showAll()
    }
    
    render() {
      const opacity=this.animated.interpolate({
        inputRange:[0,1],
        outputRange:[0,1]
      });
      const translateX= this.animated.interpolate({
        inputRange:[0,1],
        outputRange:[-500,1]
      });
        const {ads} =this.props;
        const transform = [{translateX}]
        return (
            <View style={styles.container}>
            <Text style={styles.title}>
            Delete
            </Text>
            <Animated.ScrollView style={[styles.adsContainer,{transform,opacity}]}>
                    {ads.ads.map((ad,index)=>(
                        <View style={styles.ads} key={index}>
                            <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={styles.make}>
                              {ad.name} {ad.text}      
                            </Text>
                            </View>
                            <View style={styles.deleteButton}>
                           
                                <TouchableOpacity onPress={()=>this.props.deleteAd(ad.id)}>
                                    <View style={styles.addButtonContainer}>
                                      
                                        <Text style={styles.addButton}>
                                        DELETE
                                        </Text>
                                        
                                    </View>
                                </TouchableOpacity>
                                
                            </View>
                            
                        </View>
                    ))}
               </Animated.ScrollView>
               
               <Button title="Refresh" onPress={()=>this.animate()}
                >
                </Button>
                </View>
            
        )
    }
}
const mapStateToProps= (state) => {
    return {
      ads : state.ads,
    };
  };
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    deleteButton: {
        flex: 1,
        alignItems: 'flex-end',
      },
      addButton: {
        fontSize: 24,
        lineHeight: 24,
        backgroundColor:"#1eacb0",
      },
    adsContainer: {
      borderTopWidth: 3,
      borderTopColor: '#ddd',
      flex: 1,
    },
    addButtonContainer: {
        width: 100,
        height: 50,
        backgroundColor: '#1eacb0',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
      },
    ads: {
      padding: 20,
      backgroundColor: '#ededed',
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
  });
 
  export default connect(mapStateToProps,{showAll,deleteAd})(deleteScreen);