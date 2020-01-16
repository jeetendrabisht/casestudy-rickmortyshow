import React from 'react';
import { connect } from 'react-redux';
import * as myConst from './common/constants';

class CrossFilter extends React.Component {
    render() {
        return <React.Fragment>
            {this.props.filterArrayItems[0] ? <span>Selected Filters</span> : null }
            <div>
                {!!document.getElementById(myConst.species[0].id) && document.getElementById(myConst.species[0].id).checked ? <div className='crossFilter'>
                    {(this.props.filterArrayItems[0]) === (!!document.getElementById(myConst.species[0].id) &&
                        document.getElementById(myConst.species[0].id).value) ? <span>{myConst.species[0].label + '  X'}</span> : null}
                </div> : null}
                {!!document.getElementById(myConst.species[1].id) &&
                    document.getElementById(myConst.species[1].id).checked ? <div className='crossFilter'>
                        {(this.props.filterArrayItems[0]) === (!!document.getElementById(myConst.species[1].id) &&
                            document.getElementById(myConst.species[1].id).value) ? <span>{myConst.species[1].label + '  X'}</span> : null}
                    </div> : null}
                {!!document.getElementById(myConst.gender[0].id) &&
                    document.getElementById(myConst.gender[0].id).checked ? <div className='crossFilter'>
                        {(this.props.filterArrayItems[0]) === (!!document.getElementById(myConst.gender[0].id) &&
                            document.getElementById(myConst.gender[0].id).value) ? <span>{myConst.gender[0].label + '  X'}</span> : null}
                    </div> : null}
                {!!document.getElementById(myConst.gender[1].id) &&
                    document.getElementById(myConst.gender[1].id).checked ? <div className='crossFilter'>
                        {(this.props.filterArrayItems[0]) === (!!document.getElementById(myConst.gender[1].id) &&
                            document.getElementById(myConst.gender[1].id).value) ? <span>{myConst.gender[1].label + '  X'}</span> : null}
                    </div> : null}
            </div>

        </React.Fragment>
    }
}

const mapStateToProps = (state) => {
    return {
        filterArrayItems: state.filterArrayItems
    };
};

export default connect(mapStateToProps, null)(CrossFilter);