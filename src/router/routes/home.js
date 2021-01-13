import Index from "@/views/home/index"
import Stylists from "@/views/home/index/introduce/stylist/stylist"
import Photo from "@/views/home/index/introduce/photo/photo"
import Decorate from "@/views/home/index/introduce/decorate/decorate"
import BuildingSite from "@/views/home/index/introduce/buildingSite/buildingSite"
import Stylist from "@/views/home/index/introduce/stylist/detail.vue"
import PhotoDetail from "@/views/home/index/introduce/photo/detail"
import DecorateDetail from "@/views/home/index/introduce/decorate/detail"
import BuildingSiteDetail from "@/views/home/index/introduce/buildingSite/detail"
import Case from "@/views/case"
import Casedel from "@/views/case/detail"
import DesignTeam from "@/views/designTeam"
import HotProperty from "@/views/hotProperty"
import HotPropertyDel from "@/views/hotProperty/detail"
import Address from "@/views/address"
import AddressDel from "@/views/address/detail"
import StyleTest from "@/views/styleTest"
import Process from "@/views/process"
import Storys from "@/views/story/storys"
import Story from "@/views/story"
import City from "@/views/cityPicker"


let index = [
  { 
    path: '/index',
    component: Index,
    children: [
      {
        path: 'stylists',
        component: Stylists,
      },
      {
        path: 'photo',
        component: Photo,
      },
      {
        path: 'site',
        component: BuildingSite,
      },
      {
        path: 'decorate',
        component: Decorate,
      },
    ]
  },
  {
    path: '/stylist',
    component: Stylist
  },
  
  {
    path: '/decoratedel',
    component: DecorateDetail
  },
  {
    path: '/sitedel',
    component: BuildingSiteDetail
  },
  {
    path: '/photodel',
    component: PhotoDetail
  },
  {
    path: '/case',
    component: Case
  },
  {
    path: '/case/detail',
    component: Casedel
  },
  {
    path: '/team',
    component: DesignTeam
  },
  {
    path: '/hotproperty',
    component: HotProperty
  },
  {
    path: '/hotprodel',
    component: HotPropertyDel
  },
  {
    path: '/address',
    component: Address
  },
  {
    path: '/addressdel',
    component: AddressDel
  },
  {
    path: '/style',
    component: StyleTest
  },
  {
    path: '/process',
    component: Process
  },
  {
    path: '/storys',
    component: Storys
  },
  {
    path: '/story/:storyId',
    component: Story
  },
  {
    path: '/city',
    component: City
  },
  
]

export default index