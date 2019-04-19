import React, {Component} from 'react';
import { Text,
         TouchableWithoutFeedback,
         View,
         LayoutAnimation,
         UIManager
        } from 'react-native'
import { connect } from 'react-redux';
import { CardSection } from './common';
//star import of all actions (same as Python * import)
import * as actions from '../actions';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {
  componentWillUpdate(){
    LayoutAnimation.easeInEaseOut();
  }
  renderDescription() {
      const {library, expanded} =this.props;
      if (expanded){
        return (
          <CardSection>
            <Text style={{flex:1}}>{library.item.description}</Text>
          </CardSection>
        );
      }
    }
    render(){
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;


      return (
        <TouchableWithoutFeedback
          onPress={() => this.props.selectLibrary(id)}
        >
          <View>
            <CardSection>
                 <Text style={titleStyle}>
                    {title}
                 </Text>
               </CardSection>
               {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};
// First argument is specifically mapStateToProps since in this case we don't have that, we passed null
// Translation: take these actions and make sure when called they are passed to anything within ListItem
export default connect(mapStateToProps, actions)(ListItem);
