import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favourites: [],
};

// Define action types
const actionTypes = {
  TOGGLE_FAVOURITES: 'TOGGLE_FAVOURITES',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVOURITES:
      const { photoId } = action.payload;
      if (state.favourites.includes(photoId)) {
        return {
          ...state,
          favourites: state.favourites.filter((id) => id !== photoId),
        };
      } else {
        return {
          ...state,
          favourites: [...state.favourites, photoId],
        };
      }
    case actionTypes.OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedPhoto: action.payload.photo,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  // Initialize the state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavourites = (photoId) => {
    // Dispatch the TOGGLE_FAVOURITES action
    dispatch({ type: actionTypes.TOGGLE_FAVOURITES, payload: { photoId } });
  };

  const openModal = (photo) => {
    // Dispatch the OPEN_MODAL action
    dispatch({ type: actionTypes.OPEN_MODAL, payload: { photo } });
  };

  const closeModal = () => {
    // Dispatch the CLOSE_MODAL action
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favourites: state.favourites,
    toggleFavourites,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
