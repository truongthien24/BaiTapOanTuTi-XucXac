import React, { Component } from 'react'
import {connect} from 'react-redux'

class KetQua extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around align-items-center" style={{flex: '2',flexDirection: 'column'}}>
                <h1 className="text-warning" style={{ fontWeight: '700', fontSize: '40px' }}>{this.props.ketQua}</h1>
                <h2 className="text-success" style={{ fontWeight: '700' }}>Số bàn thắng: {this.props.soBanThang}</h2>
                <h2 className="text-success" style={{ fontWeight: '700' }}>Số bàn chơi: {this.props.soBanChoi}</h2>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        ketQua: rootReducer.stateOanTuTi.ketQua,
        soBanThang: rootReducer.stateOanTuTi.soBanThang,
        soBanChoi: rootReducer.stateOanTuTi.soBanChoi,
    }
};

export default connect(mapStateToProps)(KetQua)