import * as React from 'react';
import { View, useWindowDimensions,Text,SafeAreaView ,Image,TextInput,FlatList} from 'react-native';
import { TabView, SceneMap ,TabBar} from 'react-native-tab-view';
const DATA = [{ key: 1, title: 'Veggie tomato  mix', rate: 'N1,900' }, { key: 2, title: 'Spicy fish sauce', rate: 'N1,900' }, { key: 3, title: 'Spicy fish sauce', rate: 'N1,900' }]

const FirstRoute = () => (
  <SafeAreaView>
    <View style={{justifyContent:'flex-end',alignSelf:'flex-end',marginRight:40,marginTop:20,}}>
       <Text style={{color:'#FA4A0C',fontSize:13}}>see more</Text>
       </View>
    <FlatList
          data={DATA}
          horizontal={true}
          keyExtractor={(item, index): string => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              <View
                style={{
                  height: 280,
                  width: 200,
                  margin: 15,
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    backgroundColor: '#fff',
                    height: '80%',
                    width: '100%',
                    borderRadius: 25,
                    marginLeft: 10
                  }}
                >
                  <View>
                    <Text style={{ marginTop: 100, justifyContent: 'center', textAlign: 'center', fontSize: 25, fontWeight: '500' }}>{item.title}</Text>
                    <Text style={{ marginTop: 27, textAlign: 'center', color: '#FA4A0C', fontSize: 15, fontWeight: '500' }}>{item.rate}</Text>
                  </View>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: '55%',
                    alignSelf: 'center',
                    backgroundColor: '#fff',
                    height: 120,
                    width: 120,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center'
                  }}
                >
                  <Image style={{ height: 70, width: 90, color: '#000000' }} source={require('../assets/images/pic1.jpeg')} />


                </View>


              </View>

            </>
          )}
        />

       
      </SafeAreaView>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />

);
const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />

);
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  Fourth: FourthRoute,
});

const TabViewExample = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Foods' },
    { key: 'second', title: 'Drinks' },
    {key: 'third',title:'snacks'},
    {key: 'Fourth',title:'Sauces'}
  ]);
  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'red'}
      inactiveColor={'black'}
      indicatorStyle={{ backgroundColor: '#FA4A0C' }}
      style={{ backgroundColor: '#EFEEEE',borderBottomLeftRadius: 25, borderBottomRightRadius: 25}}
    />
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: '40%', width: '100%', backgroundColor:'#EFEEEE' }}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 45 }}>
          <Image style={{ height: 14, width: 20, color: '#000000' }} source={require('../assets/images/Vector.png')} />
          <View>
            <Image style={{ height: 14, width: 20, color: '#000000' }} source={require('../assets/images/Vector2.png')} /></View>
        </View>
        <Text style={{ paddingHorizontal: 40, fontSize: 27, fontWeight: '700' }}>
          Delicious {'\n'}
          food for you
        </Text>
        <View style={{
          marginTop: Platform.OS === 'ios' ? 40 : 20,
          flexDirection: "row",
          backgroundColor: '#EFEEEE',
          width: '90%',
          alignSelf: 'center',
          borderRadius: 25,
          padding: 10,
          shadowColor: '#ccc',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
        }}>
          <Image style={{ height: 14, width: 13, color: '#EFEEEE', margin: 10 }} source={require('../assets/images/search.png')} />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#000"
            autoCapitalize="none"
            style={{ flex: 1, padding: 0, backgroundColor: '#EFEEEE' }}
          />

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
  </SafeAreaView>
   
  );
}
export default TabViewExample;