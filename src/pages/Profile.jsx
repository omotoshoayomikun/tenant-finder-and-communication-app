import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GlobalStyle from '../utils/GlobalStyle'
import { BoxCard } from '../components/Forms/Card'
import ListOfHouseToRent from '../components/Profile/ListOfHouseToRent';
import Bookmark from '../components/Profile/Bookmark';

function Profile({ navigation }) {
  const { container, flex1, Roboto, Raleway, flex_row, ml_10, gap10, mt_20, mb_30, mt_10, mb_10, justify_center, item_center, absolute } = GlobalStyle

  const [showPages, setShowPages] = useState('list')

  return (
    <View style={[flex1]}>
      <ScrollView>
        <View style={[{ padding: 12 }]}>
          <View style={[flex_row, styles.card_hed, gap10]}>
            <Image source={require('../../assets/imgs/welcome1.jpg')} style={[styles.card_avater, ml_10]} />
          </View>
          <View style={[]}>
            <Text style={[{ fontSize: 16, fontWeight: '600', color: '#0f172a' }]}>Omotosho Ayomikun</Text>
            <View style={[flex_row, { width: '90%' }]}>
              <Ionicons name='phone-portrait-outline' size={20} />
              <Text ellipsizeMode="tail" numberOfLines={1} style={[{ fontSize: 13, fontWeight: '400', overflow: 'hidden' }]}>
                09054544641
              </Text>
            </View>
            <View style={[flex_row, { width: '90%' }]}>
              <Ionicons name='mail' size={20} />
              <Text ellipsizeMode="tail" numberOfLines={1} style={[{ fontSize: 13, fontWeight: '400', overflow: 'hidden' }]}>
                Omotoshoayomikun@gmail.com
              </Text>
            </View>
            <View style={[flex_row, mb_10, { width: '90%' }]}>
              <Ionicons name='location-outline' size={20} />
              <Text ellipsizeMode="tail" numberOfLines={1} style={[{ fontSize: 13, fontWeight: '400', overflow: 'hidden' }]}>
                Opposite mafarosere compound offa Kwara State
              </Text>
            </View>
          </View>
          <View style={[flex_row, gap10, mt_20, mb_30, { paddingRight: 8 }]}>
            <TouchableOpacity style={styles.btn_view} onPress={() => navigation.navigate('EditProfile')}>
              {/* <AntDesign name='message1' size={20} /> */}
              <Text style={[{ fontSize: 14 }]}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn_view, flex_row]}>
              {/* <FontAwesome name='cc-mastercard' size={20} /> */}
              <Text style={[{ fontSize: 14 }]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View>
          <View style={[flex_row]}>
            <Pressable style={[flex1, item_center, styles.nav_header, { borderBottomWidth: showPages === 'list' ? 1.5 : 0 }]} 
            onPress={() => setShowPages('list')}
            >
              <FontAwesome6 name='list-ul' size={22} />
            </Pressable>
            <Pressable style={[flex1, item_center, styles.nav_header, { borderBottomWidth: showPages === 'bookmark' ? 1.5 : 0 }]} 
            onPress={() => setShowPages('bookmark')}
            >
              <FontAwesome name='bookmark-o' size={22} />
            </Pressable>
          </View>
        </View>

        <View>
          {
            showPages === 'list' && (
              <ListOfHouseToRent />
            )
          }

          {
            showPages === 'bookmark' && (
              <Bookmark />
            )
          }
        </View>

      </ScrollView>
      <View style={[absolute, item_center, { bottom: 10, right: 10 }]}>
        <Pressable style={styles.add_btn} onPress={() => navigation.navigate('AddHouseToRent')}>
          <Text>
            <Ionicons name='add-sharp' size={35} />
          </Text>
        </Pressable>
        <Text style={[{ fontSize: 10, marginTop: 5, }]}>Add House</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card_avater: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },

  btn_view: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#9ca3af',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 9
  },
  nav_header: {
    // borderBottomWidth: 1.5,
    paddingBottom: 10,
  },
  add_btn: {
    width: 55,
    height: 55,
    display: 'flex',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  }
})

export default Profile
