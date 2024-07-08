import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { routes } from './router';
import { NativeInit, NavigateAnimation } from 'simplize-component';
import initApi from './apis/init-api';
import { useAppDispatch } from './redux/hooks';
import { setUserInfo } from './redux/slices/profile-slice';
import React from 'react';

const App: React.FC = (): JSX.Element => {
  const dispath = useAppDispatch();
  const router = useNavigate();
  const location = useLocation();

  return (
    <NativeInit
      dispathUserInfo={(e) => dispath(setUserInfo(e))}
      initApi={initApi}
      navigate={router}
      theme="dark"
    >
      <NavigateAnimation
        RoutesElement={Routes}
        location={location}
        routes={routes}
      >
        {Object.values(routes).map((route, index) => (
          <Route path={route.url} element={route.element} key={index} />
        ))}
      </NavigateAnimation>
    </NativeInit>
  );
};

export default App;
