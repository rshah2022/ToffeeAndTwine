import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

// Asset
import CommonStyle, { fontsize10, fontsize12 } from '../../../Assets/Style/CommonStyle';
import { demodp } from '../../../Assets/utils/Image';
import { AppString, Remove } from '../../../Assets/utils/AppString';
import { FilledButton } from '../../../Components/Button/Button';
import { NotificationScreenStyle } from './NotificationScreenStyle';
import { Smallbtn } from '../../../Components/Button/ButtonStyle';
import { COLORS } from '../../../Assets/utils/COLORS';

const Data = [
    {
        id: 1,
        Usename: "Jessica Rockwell",
        Title: "Birthday is on Oct 17.",
        Image: demodp
    },
    {
        id: 2,
        Usename: "Jessica Rockwell",
        Title: "Birthday is on Oct 17.",
        Image: demodp
    },
    {
        id: 3,
        Usename: "Jessica Rockwell",
        Title: "Birthday is on Oct 17.",
        Image: demodp
    },


]

const UpcomingMoments = ({ navigation }) => {


    const RenderItem = (item, index) => {
        return (
            <View style={[NotificationScreenStyle.FollowerListBg, CommonStyle.mb16]} >
                <View style={[NotificationScreenStyle.followerTxtIcon, { alignItems: 'center' }]}>
                    <Image source={item.Image} style={CommonStyle.bottomBarImg} />
                    <Text style={[CommonStyle.txtFrienduserName, { color: COLORS.PrimaryLight }]}>
                        <Text style={{ color: COLORS.black }}>{item.Usename} </Text>
                        {item.Title}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View Style={[CommonStyle.Container]}>
            <View style={NotificationScreenStyle.backgroundColor}>
                <FlatList
                    data={Data}
                    renderItem={({ item, index }) => RenderItem(item, index)}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
}


export default UpcomingMoments;
