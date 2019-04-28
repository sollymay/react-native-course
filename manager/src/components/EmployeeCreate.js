import React, {Component} from 'react';
import { Picker, Text, View } from 'react-native';
import {connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
    render() {
        return(
           <Card>
               <CardSection>
                <Input label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={value => this.props.employeeUpdate({ prop: 'name', value})}
                />
               </CardSection>
               <CardSection>
                   <Input label="phone"
                         placeholder="555-555-5555"
                         value={this.props.phone}
                         onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value})}
                         />
               </CardSection>
               <CardSection style={styles.containerStyle}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                        <View style={styles.viewStyle}>
                            <Picker style={{flex: 1}}
                                selectedValue={this.props.shift}
                                onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}>
                                <Picker.Item label="Monday" value="Monday" />
                                <Picker.Item label="Tuesday" value="Tuesday" />
                                <Picker.Item label="Wednesday" value="Wednesday" />
                                <Picker.Item label="Thursday" value="Thursday" />
                                <Picker.Item label="Friday" value="Friday" />
                                <Picker.Item label="Saturday" value="Saturday" />
                                <Picker.Item label="Sunday" value="Sunday" />
                            </Picker>
                        </View>
                </CardSection>
               <CardSection>
                   <Button>Create</Button>
               </CardSection>
           </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift}
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    viewStyle: {
        flex: 2, height: 40
    },
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        alignItems: 'center'
      }
};
export default connect(mapStateToProps, {employeeUpdate}) (EmployeeCreate);