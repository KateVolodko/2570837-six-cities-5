import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus } from '@const';
import { UserInfo } from '../../types/state';
import { UserData } from '../../types/user-data';
import { Offers } from '../../types/offer';

const initialState: UserInfo = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  favoriteOffers: [] as Offers,
  favoriteOffersCount: 0,
};

export const userInfo = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setAuthorizationStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authorizationStatus = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData | null>) => {
      state.userData = action.payload;
    },
    setFavoriteOffers: (state, action: PayloadAction<Offers>) => {
      state.favoriteOffers = action.payload;
    },
    setFavoritesCount: (state, action: PayloadAction<number>) => {
      state.favoriteOffersCount = action.payload;
    },
  },
});

export const {
  setAuthorizationStatus,
  setUserData,
  setFavoriteOffers,
  setFavoritesCount,
} = userInfo.actions;
export const userReducer = userInfo.reducer;
