import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

// Asset
import { imgToffeeTwineLogo, imgGift, imgGoogle, imgFacebook } from '../../Assets/utils/Image';
import { AppString } from '../../Assets/utils/AppString';
import { FilledButton } from '../../Components/Button/Button';
import CommonStyle, { fontsize16 } from '../../Assets/Style/CommonStyle';
import { FONT } from '../../Assets/utils/FONT';
import { COLORS } from '../../Assets/utils/COLORS';
import { OrLine } from '../../Components/Line/OrLine';
import { FormInput, ShowFormInput } from '../../Components/FormInput';




const SignIn = ({ navigation }) => {

    const keyboardVerticalOffset = Platform.OS === 'ios' ? 5 : 0
    const [getEmail, setEmail] = useState('');
    const [getCreatePassword, setCreatePassword] = useState('');

    return (
        <SafeAreaView style={[CommonStyle.MainContainer]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical={false}
            // contentContainerStyle={CommonStyle.height}
            >
                <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={keyboardVerticalOffset}>
                    <View style={[CommonStyle.Container, CommonStyle.authPage]}>

                        <View style={CommonStyle.my32}>
                            <Image source={imgToffeeTwineLogo} style={CommonStyle.logoImage} />
                            <Text style={CommonStyle.giftThoughtfully}>{AppString.GiftThoughtfully}</Text>
                        </View>

                        <View style={CommonStyle.formGroup}>

                            <Text style={CommonStyle.formLabel}>{AppString.EmailAddress}</Text>
                            <FormInput
                                buttonName={AppString.Enteremailaddress}
                                textChange={(Email) => setEmail(Email)}
                            />
                        </View>

                        <View style={CommonStyle.formGroup}>
                            <Text style={CommonStyle.formLabel}>{AppString.CreatePassword}</Text>
                            <ShowFormInput
                                buttonName={AppString.CreatePassword}
                                textChange={(CreatePassword) => setCreatePassword(CreatePassword)}
                            />
                        </View>

                        <View style={CommonStyle.Right}>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                                <Text style={CommonStyle.txtContent}>{AppString.ForgotPassword}</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <FilledButton
                                buttonName={AppString.Signin}
                                onPress={() => { navigation.navigate('Navigation') }}
                            />
                        </View>

                        <View style={CommonStyle.mb32}>
                            <OrLine
                                LineName={"OR"}
                            />
                        </View>

                        <View style={[CommonStyle.mb32, CommonStyle.googleFb]}>
                            <TouchableOpacity onPress={() => { }} style={Styles.iconbg}>
                                <Image source={imgGoogle} style={Styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }} style={Styles.iconbg}>
                                <Image source={imgFacebook} style={Styles.icon} />
                            </TouchableOpacity>
                        </View>


                        <View style={[Styles.bgbottomicon]}>
                            <Text style={{ color: COLORS.gray }}>{AppString.Alreadyhaveanaccount}
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={{ color: COLORS.black }}> {AppString.Signup}</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>

        </SafeAreaView >
    )
}
const Styles = StyleSheet.create({

    bgbottomicon: {
        width: '100%',
        height: 64,
        flexDirection: 'row',
        justifyContent: 'center',
        ...fontsize16,
        color: COLORS.gray,
        position: 'absolute',
        bottom: 0,
        right: 32,
        left: 32,
        alignItems: 'center',
        textAlign: 'center',
    },
    iconbg: {
        paddingLeft: 8,
        paddingRight: 8
    },
    icon: {
        width: 32,
        height: 32,
    },

});
export default SignIn;
