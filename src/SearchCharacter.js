import React from 'react';
import { connect } from 'react-redux';
import { searchStoreData } from './actions';

class SearchCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            input : '' 
        };
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    }
    handleClick = () => {
        const {items} = this.props;
        if(this.state.input.length === 0) {
            this.props.searchStoreData([...items]);
        } else {
            let showCharacter = !!items && items.filter(data => {
                return data.name === this.state.input;
            });
            this.props.searchStoreData(showCharacter);
        }      
    }

    render() {
        return <React.Fragment>
            <label htmlFor="name">Search By Name</label>
            <input type="text" id="characterName" name="name" onChange={this.handleChange} />
            <input type="button" id='searchButton' value="Search" onClick={this.handleClick} />
        </React.Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        searchStoreData: (data) => dispatch(searchStoreData(data))
    };
};



export default connect(mapStateToProps, mapDispatchToProps)(SearchCharacter);