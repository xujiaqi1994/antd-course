export default {
  singular: true,
  // routes: [
  //     {
  //         path: '/',
  //         component: 'HelloWorld',
  //         Routes: ['./src/layout/BasicLayout']
  //     },
  // ],
  routes: [{
    path: '/',
    component: '../layout/BasicLayout',
    routes: [
      { path: '/puzzlecards',
       component: './puzzlecards' 
      },
      {
        path: '/',
        component: 'Helloworld',
      },
      {
        path: '/helloworld',
        component: 'Helloworld'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
        ]
      },
    ]
  }],
  plugins: [
      ['umi-plugin-react', {
          antd: true,
          dva: true,
      }]
  ],
};
