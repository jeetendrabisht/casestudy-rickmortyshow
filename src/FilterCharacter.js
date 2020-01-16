import React from 'react';
import { connect } from 'react-redux';
import * as myConst from './common/constants';
import { selectedFilter } from './actions';

class FilterCharacter extends React.Component {
    constructor(props) {
        super(props);
    }

    handleHuman = (event) => {
        this.props.selectedFilter(event.target.value);
        document.getElementById(myConst.species[0].id).setAttribute('checked', true);
    }

    handleAlien = (event) => {
        this.props.selectedFilter(event.target.value);
        document.getElementById(myConst.species[1].id).setAttribute('checked', true);
    }

    handleMale = (event) => {
        this.props.selectedFilter(event.target.value);
        document.getElementById(myConst.gender[0].id).setAttribute('checked', true);
    }

    handleFemale = (event) => {
        this.props.selectedFilter(event.target.value);
        document.getElementById(myConst.gender[1].id).setAttribute('checked', true);
    }

    render() {
        return <div className='filter-table'>
        <span className='bold filter-main'>Filters</span>
        <table className = 'species-class'>
            <thead className='bold'>Species</thead>
            <tbody>
                <tr><td><input type="checkbox" value={myConst.species[0].label} id= {myConst.species[0].id} onClick={this.handleHuman} />{myConst.species[0].label} </td></tr>
                <tr><td><input type="checkbox" value={myConst.species[1].label} id= {myConst.species[1].id} onClick={this.handleAlien} />{myConst.species[1].label} </td></tr>
            </tbody>
        </table>
        <table className = 'gender-class'>
            <thead className='bold'>Gender</thead>
            <tbody>
            <tr><td><input type="checkbox" value={myConst.gender[0].label} id={myConst.gender[0].id} onClick={this.handleMale} />{myConst.gender[0].label} </td></tr>
            <tr><td><input type="checkbox" value={myConst.gender[1].label} id={myConst.gender[1].id} onClick={this.handleFemale} />{myConst.gender[1].label} </td></tr>   
            </tbody>
        </table>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectedFilter: (data) => dispatch(selectedFilter(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterCharacter);