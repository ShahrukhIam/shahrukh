import { atom } from 'jotai';

export const cartSlidingPane = atom<boolean>(false);
export const ProfileSlidingPane = atom<boolean>(false);
export const CustomerMobileNumber = atom<string>('');
export const UserResponse = atom<any>({});