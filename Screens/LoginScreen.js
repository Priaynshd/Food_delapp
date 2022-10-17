// screens/BlogDetails.js
import * as React from 'react';
import { View, useWindowDimensions, SafeAreaView, Text ,Image,Dimensions,TextInput,TouchableOpacity} from 'react-native';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
function onLogInPress  (navigation)  {
  navigation.navigate('Home')
}
 
const renderTabBar = props => (
  <TabBar
    {...props}
    activeColor={'red'}
    inactiveColor={'black'}
    indicatorStyle={{ backgroundColor: '#FA4A0C' }}
    style={{ backgroundColor: '#fff',borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}
  />
);
const loginScreen =({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Login' },
    { key: 'second', title: 'Sign-up' },
  ]);


   FirstRoute = () => (
 

    <View style={{ flex: 1, backgroundColor: '#ffff' }}  >
      <View style={{width:Dimensions.get('window').width}}>
                  <Text style={{color:'#666666',marginLeft:25,marginTop:45}}>Email address</Text>
                  <View style={{width:'90%',paddingLeft:22,height:40}}>
                  <TextInput 
                      placeholder="Your Username"
                      placeholderTextColor="black"
                      keyboardType='email-address'
                      style={{ 
                        flex:1,
                      paddingLeft: 2,
                      color: '#05375a',
                      borderBottomWidth:0.2}}
                      autoCapitalize="none"
  
                      />
                  </View>
                  <Text style={{color:'#666666',marginLeft:25,marginTop:45}}>Password</Text>
                  <View style={{width:'90%',paddingLeft:22,height:40}}>
                  <TextInput 
                      placeholder="Your Password"
                      placeholderTextColor="black"
                      keyboardType='default'
                      style={{ 
                        flex:1,
                      paddingLeft: 2,
                      color: '#05375a',
                      borderBottomWidth:0.2}}
                      autoCapitalize="none"
  
                      />
                  </View>
                  <TouchableOpacity>
                  <Text style={{color: '#FA4A0C', marginTop:35,marginLeft:25,fontWeight:'600'}}>Forgot passcode?</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigation.navigate('Home')} style={{ backgroundColor: 'red', height: 60, width: 270, justifyContent: 'center', alignItems: 'center',  borderRadius: 25,marginHorizontal:60,marginVertical:80 }}>
                              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>
                                 Login
                              </Text>
                          </TouchableOpacity>
  
                  </View>
    </View>
  );


   SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ffff',justifyContent:'center',alignItems:'center' }} >
      <Text>hiii im SignUp</Text>
      </View>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  
  
  return (

    <View style={{ flex: 1 }}>
      <View style={{ height: '45%', width: '100%', backgroundColor:'#fff' }}>
             <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 220 }}>
          <Image style={{ width: 100, height: 100, margin: 15 }} source={require('../assets/images/Bellalogo.png')} />
           </View>
      </View>
      <View style={{ height: '60%', width: '100%' }}>
        <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </View>
    </View>

  );
}
export default loginScreen;



