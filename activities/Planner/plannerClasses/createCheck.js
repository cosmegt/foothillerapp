import React from 'react';
import {Text, View} from 'react-native';
import {checkbox} from 'react-native-checkbox';

export default class CreateCheckbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        }
    }

    render() {
        return (
            <View>
                <CheckBox
                    title='Test'
                    checkedIcon='dot-circle-o'
                    uncheckedIcon='circle-o'
                    checked={this.state.checked}
                    onPress={() => {
                        this.setState({checked: !this.state.checked});
                    }}
                />
            </View>
        )
    }
}