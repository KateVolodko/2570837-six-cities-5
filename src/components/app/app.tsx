import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '@pages/main-screen/main-screen';
import LoginScreen from '@pages/login-screen/login-screen';
import FavoritesScreen from '@pages/favorites-screen/favorites-screen';
import OfferScreen from '@pages/offer-screen/offer-screen';
import NotFoundScreen from '@pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { setFullOffers, setOffersList, setReviews } from '@store/action';


export default function App(): JSX.Element {
  const offers = useAppSelector((state) => state.offersList);
  const reviews = useAppSelector((state) => state.reviews);
  const fullOffers = useAppSelector((state) => state.fullOffers);
  const dispatch = useAppDispatch();
  dispatch(setOffersList(offers));
  dispatch(setReviews(reviews));
  dispatch(setFullOffers(fullOffers));

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainScreen />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesScreen />
              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<OfferScreen />}
          />
          <Route
            path="*"
            element={<NotFoundScreen />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
