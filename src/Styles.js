// @flow
import { StyleSheet } from 'react-native';
import { ScreenWidth, ScreenHeight, White, Black30 } from './Globals';


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Black30
    },
    alertView: {
        width: ScreenWidth - 50,
        borderRadius: 15,
        backgroundColor: White,
        alignItems: "center"
    },
    titleTxt: {
        paddingTop: 16,
        paddingBottom: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: '500'
    },
    messageTxt: {
        fontSize: 15,
        textAlign: "left",
        letterSpacing: 0.34,
        paddingHorizontal: 16,
        paddingBottom: 16
    },
    separatorView: {
        height: 1,
        width: "100%",
        backgroundColor: Black30,
        opacity: 0.3
    },
    rowSeparatorView: {
        height: "100%",
        width: 1,
        backgroundColor: Black30,
        opacity: 0.3
    },
    btnView: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
    },
    btnRowView: {
        width: ScreenWidth - 50,
        flexDirection: 'row',
        justifyContent: 'center',
        height: ScreenHeight * 0.0554,
        overflow: "hidden"
    },
    btnTxt: {
        padding: 10,
        fontSize: 18,
    },
    btnRowText: {
        textAlign: 'center',
        fontSize: 18,
    },
    rowTouchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
