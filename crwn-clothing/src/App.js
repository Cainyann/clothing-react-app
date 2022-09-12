
import { Routes, Route } from 'react-router-dom'

import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Auth from './routes/anthentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'




function App() {
  return (
    <div className="App">
      <Routes>
        {/* 注册路由 */}
        <Route path="/" element={<Navigation />}>
          {/* 将其他部分作为navigarion的子路由，从而保证navigation始终固定在顶方 */}
          {/* idnex表示默认路径 */}
          <Route index={true} element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Auth />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
