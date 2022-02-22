export const jars = [
    {
        id: 'jar_1',
        name: 'Thiết yếu',
        color: '#d13667',
        total: 2000000,
        value: 1207000
    },
    {
        id: 'jar_2',
        name: 'Giáo dục',
        color: '#0b78e3',
        total: 500000,
        value: 400000
    },
    {
        id: 'jar_3',
        name: 'Tiết kiệm',
        color: '#e6a63c',
        total: 1000000,
        value: 700000
    },
    {
        id: 'jar_4',
        name: 'Hưởng thụ',
        color: '#8d4de8',
        total: 3000000,
        value: 200000
    },
    {
        id: 'jar_5',
        name: 'Đầu tư',
        color: '#7ed321',
        total: 500000,
        value: 500000
    },
    {
        id: 'jar_6',
        name: 'Thiện tâm',
        color: '#fd3e8b',
        total: 100000,
        value: 70000
    },
];

export const boxs = [{
    type: 'Tháng',
    money: 36100800,
    add: 8200000,
    spent: 420.000,
    pressAdd: () => {
        console.log('add_thang');
    },
    pressSpent: () => {
        console.log('spent_thang');
    }
},
{
    type: 'Tuần này',
    money: 610800,
    add: 200000,
    spent: 20000,
    pressAdd: () => {
        console.log('add_tuan');
    },
    pressSpent: () => {
        console.log('spent_tuan');
    }
},
{
    type: 'Hôm nay',
    money: 100800,
    add: 20000,
    spent: 2000,
    pressAdd: () => {
        console.log('add_nay');
    },
    pressSpent: () => {
        console.log('spent_nay');
    }
},
];

export const hashtags = [
    'lương',
    'ăn',
    'xăng',
    'trọ',
    'gas',
    'nước',
]