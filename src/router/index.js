
import {
  Users,
  Detail,
  Goods,
  News,
  List,
  Shop,
  Phone,
  Meat,
  Clothes
} from '../pages'

const routes = [
  {
    path: "/users",
    component: Users,
    title: "Users",
    children: [
      {
        path: "/users/list",
        component: List,
        title: "List"
      },
      {
        path: "/users/shop",
        component: Shop,
        title: "Shop"
      }
    ]
  },
  {
    path: "/detail",
    component: Detail,
    title: "Detail"
  },
  {
    path: "/goods",
    component: Goods,
    title: "Goods",
    children: [
      {
        path: "/goods/phone",
        component: Phone,
        title: "Phone"
      },
      {
        path: "/goods/meat",
        component: Meat,
        title: "Meat"
      }, {
        path: "/goods/clothes",
        component: Clothes,
        title: "Clothes"
      }
    ]
  },
  {
    path: "/news",
    component: News,
    title: "News"
  }
]


// const routeslist = [
//   {
//     path: "/users",
//     component: Users,
//     title: "Users",
//   },
//   {
//     path: "/users/list",
//     component: List,
//     title: "List"
//   },
//   {
//     path: "/detail",
//     component: Detail,
//     title: "Detail"
//   },
//   {
//     path: "/goods",
//     component: Goods,
//     title: "Goods"
//   },
//   {
//     path: "/news",
//     component: News,
//     title: "News"
//   }
// ]

export default routes
