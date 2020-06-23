import React, { Component } from 'react';
import { Text, View, Modal, TouchableOpacity, Animated } from 'react-native';
import Styles from './Styles';
import PropTypes from 'prop-types';
import { DarkGrapeFruit } from './Globals';

export default class CustomAlert extends Component {

    constructor(props, defaultProps) {
        super(props, defaultProps);
        this.springValue = new Animated.Value(0);
        this.state = {
            modalVisible: this.props.isVisible
        };
        this._springShow()
    }

    componentDidMount() {
    }

    isCloseView() {
        this.setState({ modalVisible: false })
        this.props.isCloseView()
    }

    _springShow = () => {
        Animated.spring(this.springValue, {
            toValue: 1,
            bounciness: 10,
            useNativeDriver: true,
        }).start();
    };

    _springHide = () => {
        Animated.spring(this.springValue, {
            toValue: 0,
            tension: 10,
            useNativeDriver: true,
        }).start();

        setTimeout(() => {
            this.isCloseView();
        }, 120);
    };

    alertItemClicked(index) {
        this.props.alertItemClicked(index);
        this._springHide();
    }

    destructiveItemClicked(index) {
        this.props.destructiveItemClicked(index);
        this._springHide();
    }

    render() {
        const { title, message, items, destructiveItems } = this.props;
        const messageText = message.length >= 256 ? `${message.substr(0, 256)}...` : message;
        const animation = { transform: [{ scale: this.springValue }] };
        const buttonFlowColumn = this.props.buttonFlow.toLowerCase() === 'column';
        const btnNumber = items.length;
        const destructiveBtnNum = destructiveItems.length;
        const btnContent = [];

        Array.prototype.forEach.call(items, (item, index) => {
            btnContent.push(
                <TouchableOpacity
                    style={buttonFlowColumn ? Styles.btnView : Styles.rowTouchable}
                    onPress={() => { this.alertItemClicked(index) }} key={`btnTextBox${index}`}>
                    <Text style={[buttonFlowColumn ? Styles.btnTxt : Styles.btnRowText, item.style, {}]} numberOfLines={1}>{item}</Text>
                </TouchableOpacity>
            );
            index !== btnNumber - 1 && btnContent.push(<View style={buttonFlowColumn ? Styles.separatorView : Styles.rowSeparatorView} key={`btnLine${index}`} />);
        });

        Array.prototype.forEach.call(destructiveItems, (item, index) => {
            let newIndex = btnNumber + index;

            index !== destructiveBtnNum && btnContent.push(<View style={buttonFlowColumn ? Styles.separatorView : Styles.rowSeparatorView} key={`btnLine2${index}`} />)
            btnContent.push(
                <TouchableOpacity
                    style={buttonFlowColumn ? Styles.btnView : Styles.rowTouchable}
                    onPress={() => { this.alertItemClicked(newIndex) }} key={`btnTextBox2${index}`}>
                    <Text style={[buttonFlowColumn ? Styles.btnTxt : Styles.btnRowText, { color: DarkGrapeFruit }]} numberOfLines={1}>{item}</Text>
                </TouchableOpacity>
            );
        });

        return (
            <Modal
                visible={this.state.modalVisible}
                animationType='none'
                transparent={true}
                onRequestClose={() => this.isCloseView()}>
                <View style={Styles.container}>
                    <Animated.View style={[Styles.alertView, animation]}>
                        <Text style={Styles.titleTxt} numberOfLines={1}>{title}</Text>
                        <Text style={Styles.messageTxt}>{messageText}</Text>
                        <View style={Styles.separatorView} />
                        <View style={buttonFlowColumn ? Styles.btnView : Styles.btnRowView}>
                            {btnContent}
                        </View>
                    </Animated.View>
                </View>
            </Modal>
        );
    }
}

CustomAlert.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    items: PropTypes.array,
    destructiveItems: PropTypes.array,
    buttonFlow: PropTypes.string
};

CustomAlert.defaultProps = {
    items: ['OK'],
    destructiveItems: [],
    buttonFlow: 'row' | 'column'
}