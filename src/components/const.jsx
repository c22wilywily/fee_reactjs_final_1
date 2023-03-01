export const ThongSo = {
    Thang: "Thắng",
    Hoa: "Hòa",
    Thua: "Thua",
    HieuSo: "+/-",
    Diem: "Điểm",
    BangA: "Bảng A",
    BangB: "Bảng B",
}

export const TenDoiTuyen = {
    Halan: "Đội tuyển Hà Lan",
    Ecuador: "Đội tuyển Ecuador",
    Senegai: "Đội tuyển Senegai",
    Quatar: "Đội tuyển Quatar",
    Anh: "Đội tuyển Anh",
    My: "Đội tuyển Mỹ",
    Wales: "Đội tuyển Wales",
    Iran: "Đội tuyển Iran",
}

export const TenDoi = {
    BangA: [
        {
            Ten: TenDoiTuyen.Halan,
            Thang: 0,
            Hoa: 0,
            Thua: 0,
            HieuSo: 0,
            Diem: 0
        },
        {
            Ten: TenDoiTuyen.Ecuador,
            Thang: 0,
            Hoa: 0,
            Thua: 0,
            HieuSo: 0,
            Diem: 0
        },
        {
            Ten: TenDoiTuyen.Senegai,
            Thang: 0,
            Hoa: 0,
            Thua: 0,
            HieuSo: 0,
            Diem: 0
        },
        {
            Ten: TenDoiTuyen.Quatar,
            Thang: 0,
            Hoa: 0,
            Thua: 0,
            HieuSo: 0,
            Diem: 0
        },
    ],
    BangB: [
        {
            Ten: TenDoiTuyen.Anh,
            Thang: 0,
            Hoa: 0,
            Thua: 0,
            HieuSo: 0,
            Diem: 0
        },
        {
            Ten: TenDoiTuyen.My,
            Thang: 0,
            Hoa: 0,
            Thua: 0,
            HieuSo: 0,
            Diem: 0
        },
        {
            Ten: TenDoiTuyen.Wales,
            Thang: 0,
            Hoa: 0,
            Thua: 0,
            HieuSo: 0,
            Diem: 0
        },
        {
            Ten: TenDoiTuyen.Iran,
            Thang: 0,
            Hoa: 0,
            Thua: 0,
            HieuSo: 0,
            Diem: 0
        },
    ]
}

export const TenCapDau = [
    {
        Stt: '1',
        Bang: 'A',
        Thoigian: '20/11/2022, 23:00',
        TenDoiA: TenDoiTuyen.Quatar,
        TenDoiB: TenDoiTuyen.Ecuador,
        TenBang: ThongSo.BangA
    },
    {
        Stt: '2',
        Bang: 'B',
        Thoigian: '21/11/2022, 20:00',
        TenDoiA: TenDoiTuyen.Anh,
        TenDoiB: TenDoiTuyen.Iran,
        TenBang: ThongSo.BangB
    },
    {
        Stt: '3',
        Bang: 'A',
        Thoigian: '21/11/2022, 23:00',
        TenDoiA: TenDoiTuyen.Senegai,
        TenDoiB: TenDoiTuyen.Halan,
        TenBang: ThongSo.BangA
    },
    {
        Stt: '4',
        Bang: 'B',
        Thoigian: '22/11/2022, 22:00',
        TenDoiA: TenDoiTuyen.My,
        TenDoiB: TenDoiTuyen.Wales,
        TenBang: ThongSo.BangB
    },
]
