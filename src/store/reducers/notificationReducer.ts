import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationState {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

const initialState: NotificationState | null = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state:any, action: PayloadAction<NotificationState>) {
      return action.payload;
    },
    hideNotification(state:any) {
      return null;
    }
  }
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
