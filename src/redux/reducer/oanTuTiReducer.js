const stateDefault = {
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: './img/baiTapOanTuTi/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './img/baiTapOanTuTi/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './img/baiTapOanTuTi/bao.png', datCuoc: false},
    ],

    datCuocFocus: {
        ma: 'keo',
        hinhAnh: './img/baiTapOanTuTi/keo.png'
    },

    ketQua: "I'm iron man, i love you 3000 !!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {
        ma: 'keo', hinhAnh: './img/baiTapOanTuTi/keo.png'
    }
}

const oanTuTiReducer = (state= stateDefault, action) => {
    switch(action.type) {
        case 'DAT_CUOC': {

            //reset mảng cược 
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item,index)=>{
                return {...item, datCuoc: false};
            })

            console.log('Mảng đặt cược update', mangCuocUpdate);
            
            //Tìm ra mã cược để change trạng thái đặt cược ứng với mã cược đó
            let index = mangCuocUpdate.findIndex(qc=>qc.ma === action.payload.ma);

            if(index !== -1) {
                mangCuocUpdate[index].datCuoc = true;
            }

            state.mangDatCuoc = mangCuocUpdate;

            //Hiển thị hình ảnh đặt cược
            //C1:
            let datCuocFocus = {...state.datCuocFocus};

            datCuocFocus.ma = action.payload.ma;
            datCuocFocus.hinhAnh = action.payload.hinhAnh;
            
            state.datCuocFocus = datCuocFocus;

            return {...state};

            //C2: 
            // let {ma,hinhAnh} = action.payload;

            // state.datCuocFocus.ma = ma;
            // state.datCuocFocus.hinhAnh = hinhAnh;

            // let datCuocFocus = {...state.datCuocFocus};

            // return {...state, datCuocFocus: datCuocFocus};
        }
        
        break;
        case 'PLAY_GAME': {
            let soNgauNhien = Math.floor(Math.random() * 3);
            console.log('Số ngẫu nhiên', soNgauNhien);
            let quanCuocNgauNhien = {...state.mangDatCuoc[soNgauNhien]};
            state.computer = quanCuocNgauNhien;
            console.log('Quân cược ngẫu nhiên: ', quanCuocNgauNhien);
            console.log('State computer', state.computer);
            // let soBanChoi = state.soBanChoi;
            // soBanChoi = Number(soBanChoi) + 1;
            // console.log('Số bàn chơi',soBanChoi, typeof(soBanChoi))
            // state.soBanChoi = soBanChoi;
            return {...state};
        }

        case 'END_GAME': {
            //Xử lý thắng, thua, hòa
            let player = state.datCuocFocus;
            let computer = state.computer;
            switch(player.ma) {
                case 'keo': 
                    if(computer.ma === 'keo') 
                        state.ketQua = 'Hòa nhe ku !!';
                    else if (computer.ma === 'bao') {
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang = Number(state.soBanThang) + 1;
                    }
                    else 
                        state.ketQua = "Thua đê :v";
                ;break;
                case 'bao':
                    if(computer.ma === 'bao') 
                        state.ketQua = 'Hòa nhe ku !!';
                    else if (computer.ma === 'bua') {
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang = Number(state.soBanThang) + 1;
                    }
                    else 
                        state.ketQua = "Thua đê :v";
                ;break;
                case 'bua':
                    if(computer.ma === 'bua') 
                        state.ketQua = 'Hòa nhe ku !!';
                    else if (computer.ma === 'keo') {
                        state.ketQua = "I'm iron man, i love you 3000 !!!";
                        state.soBanThang = Number(state.soBanThang) + 1;
                    }
                    else 
                        state.ketQua = "Thua đê :v";
                ;break;
                default: 
                ;
            }

            let soBanChoi = state.soBanChoi;
            soBanChoi = Number(soBanChoi) + 1;
            console.log('Số bàn chơi',soBanChoi, typeof(soBanChoi))
            state.soBanChoi = soBanChoi;
            return {...state};
        }
        break;
        default: return {...state};
    }
}

export default oanTuTiReducer;