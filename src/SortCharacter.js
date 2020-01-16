import React from 'react';
import { connect } from 'react-redux';
import { searchStoreData } from './actions';

class SortCharacter extends React.Component {
    change = (event) => {
        this.props.searchStoreData([...this.props.items]);
        if(event.target.value === "ascending") {
            let ascendingWay = this.props.items.sort(function(a, b){return a.id-b.id});
            this.props.searchStoreData(ascendingWay);
        } else if(event.target.value === "descending") {
            let descendingWay = this.props.items.sort(function(a, b){return b.id-a.id});
            this.props.searchStoreData(descendingWay);
        }
    }

    render() {
        return <React.Fragment>
            <select class='sort-class' onChange={this.change} >
                <option value="sortby">Sort by ID</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
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

export default connect(mapStateToProps, mapDispatchToProps)(SortCharacter);