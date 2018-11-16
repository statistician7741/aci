module.exports = [
    {
        path: '/cuti',
        name: 'Cuti',
        icon: 'coffee',
        redirect: '/cuti/summary',
        routes: [
          {
            path: '/cuti/summary',
            name: 'Summary',
          },
        ],
    },
    {
        path: '/setting',
        name: 'Pengaturan',
        icon: 'tool'
    }
]