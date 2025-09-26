import { Routes } from '@angular/router';
import { Boyswear } from './components/boyswear/boyswear';
import { Girlwear } from './components/Girlswear/girlwear';
import { App } from './app';
import { HomeComponent } from './components/home/home';
import { ToysComponent } from './components/Toys/toys.component';
import { StationaryComponent } from './components/Stationary/stationary.component';
import { Kidselectronics } from './components/kidselectronics/kidselectronics';
import { Games } from './components/Games/games';
import { Footwear } from './components/Footwear/footwear';
import { Sale } from './components/sale/sale';
import { CartPageComponent } from './components/cart-page/cart-page';
import { Admin } from './admin/admin';
import { HomeView } from './home-view/home-view';
import { ElectronicView } from './elecronicview/elecronicview';
import { BoysWearView } from './boyswearview/boyswearview';
import { GirlsWearView } from './girlswearview/girlswearview';
import { SaleView } from './saleview/saleview';
import { StationaryView } from './stationaryview/stationaryview';
import { ToysView } from './toysview/toysview';
import { FormPaymentComponent } from './formpayment/formpayment';
import { OrderDetailsComponent } from './orderdetails/orderdetails';
import { AdminLoginPageComponent } from './adminloginpage/adminloginpage';
import { UserLoginComponent } from './userloginpage/userloginpage';
import { UserRegisterComponent } from './userregister/userregister';
import { UserDashboardComponent } from './userdashboard/userdashboard';
export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'boyswear', component: Boyswear },
  { path: 'boyswear/:id', component: Boyswear }, 
  { path: 'girlwear', component: Girlwear },
  { path: 'girlwear/:id', component: Girlwear },
  { path: 'toys', component: ToysComponent },
  { path: 'toys/:id', component: ToysComponent },
  { path: 'stationary', component: StationaryComponent },
  { path: 'stationary/:id', component: StationaryComponent },
  { path: 'kidselectronics', component: Kidselectronics },
  { path: 'kidselectronics/:id', component: Kidselectronics },
  { path: 'games', component: Games },
  { path: 'footwear', component: Footwear },
  { path: 'sale', component: Sale },
    { path: 'sale/:id', component: Sale },
  { path: 'cart', component: CartPageComponent },
   {path: 'admin', component: Admin },
   {path: 'homeviewpro', component: HomeView},
  {path: 'Electronicviewpro', component: ElectronicView},
  {path: 'boyswearviewpro', component: BoysWearView},
  {path: 'girlswearviewpro', component: GirlsWearView},
  {path: 'saleviewpro', component: SaleView},
  {path: 'stationayviewpro', component: StationaryView},
  {path: 'toysviewpro', component: ToysView},
  {path:'formpayment' , component:FormPaymentComponent },
  {path:'orderdetails' , component:OrderDetailsComponent },
  {path:'adminlogin' , component:AdminLoginPageComponent },
  {path:'userlogin' , component:UserLoginComponent },
  {path:'userregister' , component:UserRegisterComponent },
  {path:'userdashboard' , component:UserDashboardComponent },
  { path: '**', redirectTo: '' } ,
];
