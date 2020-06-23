/* @flow */

import React from 'react';
import CustomAlert from './CustomAlert';
import { Alert } from 'react-native';

export default function CustomAlertHOC(WrapperComponent) {
  class UpdateComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isModalOpen: false,
        alertPrm: {},
        completionHandler: undefined,
      };
    }

    showAlertView(object, completionHandler = (clikedIndex) => {
    }) {
      let items = (object.arrAlertItems != undefined) ? object.arrAlertItems.length : 0;
      let destructiveItems = (object.arrDesctructiveItems != undefined) ? object.arrDesctructiveItems.length : 0
      if (items + destructiveItems > 3) {
        Alert.alert("Custom Alerts", "Maximum 3 buttons are allowed")
      } else {
        this.setState({
          alertPrm: object,
          isModalOpen: true,
          completionHandler: completionHandler,
        });
      }
    }

    alertItemClicked = (index) => {
      this.setState({ isModalOpen: false });
      this.state.completionHandler(index);
    }

    closeModal() {
      this.setState({ isModalOpen: false });
    }

    render() {
      return (
        <>
          <WrapperComponent
            isModalOpen={this.state.isModalOpen}
            showAlertView={(object, completionHandler) => this.showAlertView(object, completionHandler)}
          />
          {this.state.isModalOpen &&
            <CustomAlert
              isVisible={this.state.isModalOpen}
              isCloseView={this.closeModal.bind(this)}
              alertItemClicked={this.alertItemClicked.bind(this)}
              title={this.state.alertPrm.title}
              message={this.state.alertPrm.message}
              buttonFlow={this.state.alertPrm.buttonFlow}
              items={this.state.alertPrm.arrAlertItems}
              destructiveItems={this.state.alertPrm.arrDestructiveItems}
            />}
        </>
      );
    }
  }
  return UpdateComponent;
}
