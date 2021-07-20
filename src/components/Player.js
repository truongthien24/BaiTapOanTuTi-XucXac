import React, { Component } from 'react'
import {connect} from 'react-redux'
class Player extends Component {
    
    renderButton = () => {
        let {mangDatCuoc} = this.props;
        return mangDatCuoc.map((item, index)=> {
            return <button className="btn btn-outline-light mx-2" id={item.ma} onClick = {()=> {
                // alert(`Bạn đã đặt cược vào ${item.ma}`)
                //Tạo ra action 
                const action = {
                    type: 'DAT_CUOC',
                    payload: {
                        ma: item.ma,
                        hinhAnh: item.hinhAnh
                    }
                }

                //Gửi action lên redux
                this.props.dispatch(action)
            }}>
                <img src={item.hinhAnh} style={{ width: '50px', height: '50px' }}></img>
            </button>
        })
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ flexDirection: 'column' }}>
                <div className="d-flex" style={{ height: '300px', position: 'relative' }}>
                    <img src='./img/baiTapOanTuTi/player.png' style={{ width: '170px', height: '170px' }} className="align-self-end player-image"></img>
                    <div className="result d-flex align-items-center justify-content-center" style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)' }}>
                        <img src={this.props.datCuocFocus.hinhAnh} style={{ width: '50px', height: '50px' }}></img>
                    </div>
                </div>
                <div className="select-img-list d-flex align-items-center justify-content-center">
                    {/* <button className="btn btn-outline-light" onClick={() => {
                        alert('Bạn đã chọn kéo')
                    }}>
                        <img src='./img/baiTapOanTuTi/keo.png' style={{ width: '50px', height: '50px' }}></img>
                    </button>
                    <button className="btn btn-outline-light" style={{ margin: '0 20px' }} onClick={() => {
                        alert('Bạn đã chọn búa')
                    }}>
                        <img src='./img/baiTapOanTuTi/bua.png' style={{ width: '50px', height: '50px' }}></img>
                    </button>
                    <button className="btn btn-outline-light" onClick={() => {
                        alert('Bạn đã chọn bao')
                    }}>
                        <img src='./img/baiTapOanTuTi/bao.png' style={{ width: '50px', height: '50px' }}></img>
                    </button> */}
                    {this.renderButton()}
                </div>
            </div>
        )
    }
}

//Hàm lấy state từ reducer về biến thành props của component
const mapStateToProps = (rootReducer) => {
    return {
        mangDatCuoc: rootReducer.stateOanTuTi.mangDatCuoc,
        datCuocFocus: rootReducer.stateOanTuTi.datCuocFocus
    }
}

export default connect(mapStateToProps)(Player)