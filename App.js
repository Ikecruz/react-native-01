import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  Platform, 
  Image
} from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const quickLink = [
    {
      name: "Deposit",
      Icon: () => 
      <MaterialCommunityIcons name='wallet-plus' color="white" size={25} />
    },
    {
      name: "Request",
      Icon: () => 
      <MaterialCommunityIcons name='credit-card-plus-outline' color="white" size={25} />
    },
    {
      name: "Transfer",
      Icon: () => 
      <MaterialCommunityIcons name='credit-card-minus-outline' color="white" size={25} />
    }
  ]

  const recentTransactions = [
    {
      name: "Maria",
      image: "https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
      date: "Today"
    },
    {
      name: "Danny",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      date: "June,8"
    },
    {
      name: "Angel",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "June,1"
    },
    {
      name: "Leon",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      date: "May,22"
    },
    {
      name: "Mikel",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60",
      date: "May,1"
    }
  ]

  return (
    <SafeAreaView style={styles.safe_area}>
      <StatusBar backgroundColor="white"  barStyle="dark-content" translucent={true} />
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.header}>
            <View style={styles.image_container}>
              <Image
                source={{ uri: "https://avatars.githubusercontent.com/u/66731231" }}
                style={{
                  height: "100%",
                  width: "100%",
                  resizeMode: "cover"
                }}
              />
            </View>
            <Text style={styles.company_name}>Digidaw</Text>
            <View style={styles.notification_container}>
              <Ionicons name='notifications-outline' size={20} />
            </View>
          </View>

          {/* BALANCE */}
          <View style={styles.balance_display}>
            <Text style={{ color: "white", marginBottom: 4, fontSize: 16 }}>Balance</Text>
            <Text style={{ fontSize: 45, marginBottom: 20, color: "white", fontFamily: "Lato-Regular" }}> 
              <Text style={{ color: "#e0e0e0", opacity: 0.7 }}>${" "}</Text>
              625.00
            </Text>
            <Text style={{ color: "white", marginBottom: 4, fontSize: 16 }}>Card</Text>
            <View style={styles.card_box}>
              <View style={styles.card}>
                <Image
                  source={{ uri: "https://www.nerdwallet.com/cdn-cgi/image/width=1800,quality=85/cdn/images/marketplace/credit_cards/a59fef9a-5006-449d-9527-3ae0c300e614/ea773ad4032ec7bbebecd5f4e4508cce3a1482aa75311effc6fc1de626c28975.jpg" }}
                  style={{
                    height: "100%",
                    width: "100%",
                    resizeMode: "cover"
                  }}
                />
              </View>
              <View>
                <Text style={{ fontWeight: 700, fontSize: 13 }}>Victor Wanyama</Text>
                <Text style={{ color: "gray", fontSize: 13 }}>7345 6738 3627 3727</Text>
              </View>
            </View>
          </View>

          {/* QUICK LINKS */}
          <View style={styles.quick_links_contain}>
            {
              quickLink.map(({ name, Icon }, index) => (
                <View style={styles.links_item} key={index} >
                  <View style={styles.link_icon}>
                    <Icon />
                  </View>
                  <Text style={{ fontWeight: 600 }}>{name}</Text>
                </View>
              ))
            }
          </View>

          {/* RECENT TRANSACTIONS */}
          <View>
            <Text style={{ color: "black", marginBottom: 15, fontSize: 17, fontWeight: 600 }}>Recent Transfer</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                {
                  recentTransactions.map(({ name, date, image }, index) => (
                    <View style={styles.recent_transaction} key={index}> 
                      <View style={[styles.image_container]}>
                        <Image
                          source={{ uri: image }}
                          style={{
                            height: "100%",
                            width: "100%",
                            resizeMode: "cover"
                          }}
                        />
                      </View>
                      <Text numberOfLines={1} style={{ fontWeight: 600, fontSize: 15 }}>{name}</Text>
                      <Text numberOfLines={1} style={{ color: "gray", fontSize: 12, fontWeight: 400 }}>{date}</Text>
                    </View>
                  ))
                }
              </View>
            </ScrollView>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  container: {
    flex: 1,
    color: "black",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10
  },
  scroll: {
    height: "100%",
    width: "100%"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  image_container: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: "hidden"
  },
  company_name: {
    fontSize: 18,
    fontWeight: 700
  },
  notification_container: {
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f4",
    borderRadius: 100,
  },
  balance_display: {
    width: "100%",
    backgroundColor: "#345afa",
    borderRadius: 10,
    padding: 20
  },
  card_box: {
    backgroundColor: "white",
    padding: 13,
    marginTop: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    gap: 12,
    alignItems: "center"
  },
  card: {
    height: 40,
    width: 60,
    borderRadius: 5,
    overflow: "hidden",
  },
  quick_links_contain: {
    width: "100%",
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 45
  },
  links_item: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  link_icon: {
    width: 55,
    height: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 100,
  },
  recent_transaction: {
    width: 85,
    backgroundColor: "#f3f3f4",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    display: "flex",
    gap: 8,
    alignItems: "center"
  }
});
