import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as myConst from './common/constants';
import { getRickMortyShowAPI } from './actions';
import SearchCharacter from './SearchCharacter';
import NoShowCharacter from './NoShowCharacter';
import FilterCharacter from './FilterCharacter';
import SortCharacter from './SortCharacter';
import CrossFilter from './CrossFilter';
import './css/common.css';

class ShowCharacter extends React.Component {
    componentDidMount() {
        this.props.fetchData(myConst.RICK_MORTY_SHOW_API);
    }

    primaryContent = item => {
        let currentDate = new Date().getFullYear();
        return <div className='inner-primary-content'>
            <img className="char-img" key={item.id} src={item.image} alt={item.name} />
            <div className='content-name'>
                <p className="char-heading1">{item.name}</p>
                <p className="char-heading2"><span>id:  {item.id}</span><span> - </span><span>created {currentDate - item.created.slice(0, 4)} years ago</span></p>
            </div>
            <table className='character-table'>
                <tbody>
                    <tr className='bordered'><td>STATUS</td><td className='bordered-color'>{item.status}</td></tr>
                    <tr className='bordered'><td>SPECIES</td><td className='bordered-color'>{item.species}</td></tr>
                    <tr className='bordered'><td>GENDER</td><td className='bordered-color'>{item.gender}</td></tr>
                    <tr className='bordered'><td>ORIGIN</td><td className='bordered-color'>{item.origin.name}</td></tr>
                    <tr className='bordered'><td>LAST LOCATION</td><td className='bordered-color'>{item.location.name}</td></tr>
                </tbody>
            </table>
        </div>
    }

    render() {
        const { items, searchData } = this.props;
        return <div className='main'>
            <FilterCharacter />
            <div className='filter-character-class'>
                <div className='search-class'>
                    <div className='cross-filter-main'>
                    <CrossFilter />
                    </div>
                    <SearchCharacter />
                    <SortCharacter />
                </div>
                <div className='characters-class'>
                    {!searchData ? !!items && items.map(item => {
                        return <div className='character-profile'>{this.primaryContent(item)}</div>
                    }) :
                        !!searchData && searchData.length === 0 ? <NoShowCharacter /> : !!searchData && searchData.map(item => {
                            return <div className='character-profile'>{this.primaryContent(item)}</div>
                        })}
                </div>
            </div>

        </div>
    }
}

ShowCharacter.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasError: state.itemsHaveError,
        isLoading: state.itemsAreLoading,
        searchData: state.searchCharacter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getRickMortyShowAPI(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCharacter);