import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type valueState = {
  photo: any | null;
};

const defaultValue: valueState = {
  photo: null,
};

const PhotoUploaded = createSlice({
  name: "photoUploader",
  initialState: defaultValue,
  reducers: {
    setPhoto(state, action: PayloadAction<{ image: any }>) {
      state.photo = action.payload.image;
    },
    clearPhoto(state) {
      state.photo = null;
    },
  },
});

export const photoUploadedActions = PhotoUploaded.actions;
export default PhotoUploaded;
