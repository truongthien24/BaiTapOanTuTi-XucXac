import React, { Component } from 'react'
import Player from './Player'
import Computer from './Computer'
import KetQua from './KetQua'
import {connect} from 'react-redux'

class baiTapOanTuTi extends Component {
    render() {

        return (
            <div className="container-fluid" style={{backgroundImage: 'url(./img/baiTapOanTuTi/bgGame.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100vh'}}>
                <div className="row" style={{height: '50%', padding: '20px'}}>
                    <div className="col-3">
                       <Player/>
                    </div>
                    <div className="col-6 d-flex" style={{flexDirection: 'column'}}>
                        <KetQua/>                
                        <div className="d-flex justify-content-center" style={{flex: '1'}}>
                            <button className="btn btn-success mb-5" onClick={()=>{
                                //Tạo action 
                                const action = {
                                    type: 'PLAY_GAME',
                                    playload: 1,
                                }
                                let count = 0;
                                //Khai báo hàm lập đi lập lại
                                let randomComputerItem = setInterval(()=> {
                                    this.props.dispatch(action);
                                    count++;
                                    if(count > 10) {
                                        //Dừng hàm lặp đi lặp lại
                                        clearInterval(randomComputerItem);
                                        const action = {
                                            type: 'END_GAME',
                                        }
                                        this.props.dispatch(action);
                                    }
                                },150)
                            }}>Play game</button>
                        </div>
                    </div>
                    <div className="col-3">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         playGame: () => {
//             let count = 0;
//             //Khai báo hàm lặp đi lặp lại
//             let randomComputerItem = setInterval(()=> {
//                 dispatch({
//                     type: 'RAN_DOM',
//                 })
//                 count++;
//                 if(count>10) {
//                     //Hàm dừng setInterval
//                     clearInterval(randomComputerItem);
//                     dispatch({
//                         type: 'END_GAME'
//                     })
//                 }
//             },100);
//         }
//     }
// }

export default connect()(baiTapOanTuTi)
