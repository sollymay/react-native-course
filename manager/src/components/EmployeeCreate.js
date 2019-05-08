import React, {Component} from 'react';
import {connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }
    render() {
        return(
           <Card>
               <EmployeeForm {...this.props} />
               <CardSection>
                   <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
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
export default connect(mapStateToProps, {employeeUpdate, employeeCreate}) (EmployeeCreate);