import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';

// Lib
import ImagePicker from 'react-native-image-crop-picker';
import Modal from "react-native-modal";
import { Calendar } from 'react-native-calendars';

// Asset
import CommonStyle from '../../Assets/Style/CommonStyle';
import TutorialStyle from '../Signup/Tutorial/TutorialStyle';
import { ToolbarMain } from '../../Components/ToolbarMain/ToolbarMain'
import { MainScreenStyle } from './MainScreenStyle';
import { AppString } from '../../Assets/utils/AppString';
import { imgExploreaNShare, imgCoffee, imgDesserts, imgFlowers, imgLaptop, imgRing, imgBook, imgCandy, imgClothes, imgJewelry, imgShoes, demodp, imgImport } from '../../Assets/utils/Image';
import { COLORS } from '../../Assets/utils/COLORS';
import { SimpleInputEditView } from '../../Components/FormInput';
import { POPLinkButton, POPOutLinkButton } from '../../Components/Button/Button';
import { CalendarList } from '../../Components/AllListVIew/CalendarList';
import { MyBlackStatusbar } from '../../Components/MyStatusBar/MyBlackStatusbar';
import { FONT } from '../../Assets/utils/FONT';



const Data = [
    {
        id: 1,
        Name: AppString.Coffee,
        Image: imgCoffee
    },
    {
        id: 2,
        Name: AppString.Dessert,
        Image: imgDesserts
    },
    {
        id: 3,
        Name: AppString.Flowers,
        Image: imgFlowers
    },
    {
        id: 4,
        Name: AppString.Laptop,
        Image: imgLaptop
    },
    {
        id: 5,
        Name: AppString.Ring,
        Image: imgRing
    },
    {
        id: 6,
        Name: AppString.Book,
        Image: imgBook
    },
    {
        id: 7,
        Name: AppString.Dessert,
        Image: imgDesserts
    },
];

const CalenderDate = [
    {
        '2021-09-25': {
            dots: [
                {
                    id: 1,
                    key: 'vacation',
                    color: 'blue',
                    Name: "Jessica Rockwell",
                    NameType: "Birthday",
                    selectedDotColor: 'blue',
                    Name: "Jessica Rockwell",
                    NameType: "Birthday",
                },
                {
                    id: 2,
                    key: 'massage',
                    color: 'blue',
                    selectedDotColor: 'blue',
                    Name: "Gregory Thomson",
                    NameType: "Anniversary",
                },
                {
                    id: 3,
                    key: 'workout',
                    color: 'green',
                    Name: "Robert Bob Thomson",
                    NameType: "Graduation",
                },
                {
                    id: 4,
                    key: 'workout',
                    color: 'green',
                    Name: "Robert Bob Thomson",
                    NameType: "Graduation",
                }
            ]
        },
        '2021-09-26': {
            dots: [
                {
                    id: 1,
                    key: 'vacation',
                    color: 'blue',
                    selectedDotColor: 'blue',
                    Name: "Jessica Rockwell",
                    NameType: "Birthday",
                },
            ]
        },
    }
]

const keyboardVerticalOffset = Platform.OS === 'ios' ? 10 : 0

const CalendarScreen = () => {


    // AddItemShow
    const [getCalenderDateModal, setCalenderDateModal] = useState(false);
    const [getCalenderDateItem, setCalenderDateItem] = useState([]);

    // AddItemShow
    const [getAddItemShowModal, setAddItemShowModal] = useState(false);
    const [getAddItemShowItem, setAddItemShowItem] = useState('');

    // getEditItemModal
    const [getEditItemModal, setEditItemModal] = useState(false);
    const [getEditItem, setEditItem] = useState('');

    // getAddNewItemModal
    const [getAddNewItemModal, setAddNewItemModal] = useState(false);
    const [getAddNewItem, setAddNewItem] = useState('');


    const [getImage, setImage] = useState('')
    const [getFirstName, setFirstName] = useState('')
    const [getSecondName, setSecondName] = useState('')
    const [getThirdName, setThirdName] = useState('')
    const [getFourName, setFourName] = useState('')
    const [getFiveName, setFiveName] = useState('')
    const [getSixName, setSixName] = useState('')



    const ImageChange = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            setImage(image.path)
            console.log("image===>", image.path);
        });
    }

    // Save All Item
    const SaveItem = () => {
        setAddItemShowModal(false)
        setEditItemModal(false)
        setAddNewItemModal(false)
    }

    // Close All Item
    const CloseItem = () => {
        setAddItemShowModal(false)
        setEditItemModal(false)
        setAddNewItemModal(false)
        setCalenderDateModal(false)
    }

    // Old Select Categories -- > Edit Item
    const AddEditItem = (getAddNewItem) => {
        setAddNewItemModal(false)
        setEditItemModal(true)
        setEditItem(getAddNewItem)
    }

    // Select old Categories --> Open 
    const AddNewItem = (Name, Image, id) => {
        console.log("Name", Name)
        console.log("Image", Image)
        console.log("id", id)
        setAddNewItemModal(true)
        setAddNewItem(Name)
    }

    const CalendarModule = (date) => {

        // console.log("date 1 ==>", date.dateString)

        // console.log("date.dateString 2 ==>", getCalenderDateItem)

        // console.log("Show", getCalenderDateItem == null)


        Object.keys(CalenderDate)
            .forEach(function (key) {
                // setCalenderDateModal(true)
                // CalenderDate[key][date.dateString]["dots"]
                // console.log("===>>>", CalenderDate[key][date.dateString])
                if (CalenderDate[key][date.dateString] != null) {
                    setCalenderDateItem(CalenderDate[key][date.dateString]["dots"])
                    setCalenderDateModal(true)
                    console.log("True")
                } else {
                    console.log("False")
                }
            });



    }

    return (
        <View style={[CommonStyle.BgColorWhite]}>
            <SafeAreaView>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    style={[CommonStyle.BgColorWhite]}
                >
                    <View style={CommonStyle.authPage} >
                        <View style={[CommonStyle.Container]}>
                            <View style={[CommonStyle.my16, CommonStyle.Row]}>
                                <Image source={demodp} style={CommonStyle.ProfileImage} />
                                <Text style={CommonStyle.userName}>Heather Swan</Text>
                            </View>

                            <Text style={[CommonStyle.txtTitle, CommonStyle.textUpperCase]}>{AppString.ExploreShare}</Text>
                        </View>

                        <View style={{ backgroundColor: COLORS.Secondary }}>
                            <ScrollView contentContainerStyle={[MainScreenStyle.scrollItemStyle, CommonStyle.toppadding16]}>
                                {Data.map((item, index) => (
                                    <CalendarList
                                        ImageUrl={item.Image}
                                        ExploreName={item.Name}
                                        Id={item.id}
                                        index={index}
                                        key={index}
                                        DataLength={Data.length}
                                        onPress={() => AddNewItem(item.Name, item.Image, item.id)}
                                    />
                                ))}
                            </ScrollView>
                        </View>

                        <View >
                            <Calendar
                                // Specify style for calendar container element. Default = {}
                                // style={{
                                //     borderWidth: 1,
                                //     borderColor: 'gray',
                                //     height: 350
                                // }}
                                pastScrollRange={50}
                                // Max amount of months allowed to scroll to the future. Default = 50
                                futureScrollRange={50}
                                // Enable or disable scrolling of calendar list
                                scrollEnabled={true}
                                // Enable or disable vertical scroll indicator. Default = false
                                showScrollIndicator={true}
                                onDayPress={(date) => CalendarModule(date)}
                                // Handler which gets executed on day long press. Default = undefined
                                // onDayLongPress={(day) => { console.log('selected day', day) }}
                                // MarkedDates
                                markedDates={CalenderDate[0]}

                                // markedDates={{
                                //     '2021-09-25': {
                                //         dots: [
                                //             {
                                //                 key: 'vacation',
                                //                 color: 'blue',
                                //                 selectedDotColor: 'blue'
                                //             },
                                //             // {
                                //             //     key: 'massage',
                                //             //     color: 'blue',
                                //             //     selectedDotColor: 'blue'
                                //             // },
                                //             // {
                                //             //     key: 'workout',
                                //             //     color: 'green'
                                //             // }
                                //         ]
                                //     },
                                // }}

                                markingType={'multi-dot'}
                                // Specify theme properties to override specific styles for calendar parts. Default = {}
                                theme={{
                                    backgroundColor: COLORS.Secondary,
                                    calendarBackground: COLORS.Secondary,
                                    textSectionTitleColor: '#b6c1cd',
                                    textSectionTitleDisabledColor: '#d9e1e8',
                                    selectedDayBackgroundColor: COLORS.Secondary,
                                    selectedDayTextColor: COLORS.white,
                                    todayTextColor: COLORS.gold,
                                    dayTextColor: '#2d4150',
                                    textDisabledColor: '#d9e1e8',
                                    dotColor: '#00adf5',
                                    selectedDotColor: COLORS.Primary,
                                    arrowColor: COLORS.black,
                                    disabledArrowColor: COLORS.PrimaryLight,
                                    monthTextColor: COLORS.black,
                                    indicatorColor: COLORS.black,
                                    textDayFontFamily: FONT.Gilroy,
                                    textMonthFontFamily: FONT.Gilroy,
                                    textDayHeaderFontFamily: FONT.Gilroy,
                                    textDayFontWeight: '300',
                                    textMonthFontWeight: 'bold',
                                    textDayHeaderFontWeight: '300',
                                    // textDayFontSize: 16,
                                    // textMonthFontSize: 16,
                                    // textDayHeaderFontSize: 16
                                }}
                            />
                        </View>

                        {
                            getCalenderDateModal == true ?
                                <Modal
                                    testID={'modal'}
                                    isVisible={getCalenderDateModal}
                                    onBackdropPress={() => CloseItem()}
                                >
                                    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>

                                        <View style={[CommonStyle.p16, TutorialStyle.popbg]}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                <Text style={[CommonStyle.txtTitle, { textAlign: 'center', marginTop: 10 }]}>Test</Text>
                                            </View>
                                            {/* <View> */}
                                            {
                                                getCalenderDateItem.length ? getCalenderDateItem.map((item, index) => {
                                                    return (
                                                        <View style={[CommonStyle.Row, CommonStyle.bp16]}>
                                                            <Image source={demodp} style={CommonStyle.bottomBarImg} />
                                                            <Text style={CommonStyle.txtFrienduserName}>{item.Name}</Text>
                                                            <Text style={CommonStyle.txtFrienduserName, { color: COLORS.PrimaryLight, marginLeft: 16 }}>{item.NameType}</Text>
                                                        </View>
                                                    )
                                                })
                                                    :
                                                    <Text>null</Text>
                                                // null
                                            }
                                            {/* </View> */}


                                        </View>
                                    </KeyboardAvoidingView>
                                </Modal>
                                :
                                null
                        }
                        {
                            getAddNewItemModal == true ?
                                <Modal
                                    testID={'modal'}
                                    isVisible={getAddNewItemModal}
                                    onBackdropPress={() => CloseItem()}
                                >
                                    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>

                                        <View style={[CommonStyle.p16, TutorialStyle.popbg]}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                <View style={{ width: '20%' }}>
                                                    <TouchableOpacity onPress={() => ImageChange()}>
                                                        {getImage != '' ?
                                                            <Image source={{ uri: getImage }} style={Styles.popupImage} />
                                                            :
                                                            <Image source={imgImport} style={Styles.popupImage} />
                                                        }
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: '80%', }}>
                                                    <Text style={[CommonStyle.txtTitle, { textAlign: 'center', marginTop: 10 }]}>{getAddNewItem}</Text>
                                                </View>
                                            </View>


                                            <View style={CommonStyle.my16}>
                                                <SimpleInputEditView
                                                    TitleName={"Color"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(FirstName) => setFirstName(FirstName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Type"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(SecondName) => setSecondName(SecondName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Amount"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(ThirdName) => setThirdName(ThirdName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Vase"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(FourName) => setFourName(FourName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Link"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(FiveName) => setFiveName(FiveName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Other Info"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(SixName) => setSixName(SixName)}
                                                />
                                            </View>


                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                                                <POPOutLinkButton
                                                    buttonName={AppString.Cancel}
                                                    onPress={() => CloseItem()}
                                                />

                                                <POPLinkButton
                                                    buttonName={AppString.Edit}
                                                    onPress={() => AddEditItem()}
                                                />

                                            </View>
                                        </View>
                                    </KeyboardAvoidingView>
                                </Modal>
                                :
                                null
                        }

                        {
                            getEditItemModal == true ?
                                <Modal
                                    testID={'modal'}
                                    isVisible={getEditItemModal}
                                >
                                    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>

                                        <View style={[CommonStyle.p16, TutorialStyle.popbg]}>

                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                <View style={{ width: '20%' }}>
                                                    <TouchableOpacity onPress={() => ImageChange()}>
                                                        {getImage != '' ?
                                                            <Image source={{ uri: getImage }} style={Styles.popupImage} />
                                                            :
                                                            <Image source={imgImport} style={Styles.popupImage} />
                                                        }
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: '80%', }}>
                                                    <Text style={[CommonStyle.txtTitle, { textAlign: 'center', marginTop: 10 }]}>{getAddNewItem}</Text>
                                                </View>
                                            </View>


                                            <View style={CommonStyle.my16}>
                                                <SimpleInputEditView
                                                    TitleName={"Color"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(FirstName) => setFirstName(FirstName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Type"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(SecondName) => setSecondName(SecondName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Amount"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(ThirdName) => setThirdName(ThirdName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Vase"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(FourName) => setFourName(FourName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Link"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(FiveName) => setFiveName(FiveName)}
                                                />
                                                <SimpleInputEditView
                                                    TitleName={"Other Info"}
                                                    placeholder={"Enter here"}
                                                    onChangeText={(SixName) => setSixName(SixName)}
                                                />
                                            </View>


                                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                                                <POPOutLinkButton
                                                    buttonName={AppString.Cancel}
                                                    onPress={() => CloseItem()}
                                                />

                                                <POPLinkButton
                                                    buttonName={AppString.Save}
                                                    onPress={() => SaveItem()}
                                                />

                                            </View>
                                        </View>
                                    </KeyboardAvoidingView>
                                </Modal>
                                :
                                null
                        }



                    </View>
                </ScrollView>

            </SafeAreaView >
        </View >
    )
}
const Styles = StyleSheet.create({


    listIconbg: {
        width: 38,
        height: 38,
        borderRadius: 20,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center'
    },
    upgradeListbg: {
        width: 38,
        height: 38,
        borderRadius: 20,
        backgroundColor: COLORS.gray,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listIcon: {
        width: 25,
        height: 25
    },
    listfontbg: {
        // flexDirection: 'row',
    },
    listfont: {
        fontSize: 14,
        marginTop: 5,
        alignItems: 'center',
    },
    popupImage: {
        width: 45,
        height: 45,
        borderRadius: 40
    },
    scrollView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});

export default CalendarScreen;
