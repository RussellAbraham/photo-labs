import React, { useReducer, useEffect } from 'react';
import topics from 'mocks/topics';
// Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favourites: [],
  photos: [], // Initialize photos array
};

// Define action types
const actionTypes = {
  TOGGLE_FAVOURITES: 'TOGGLE_FAVOURITES',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  FETCH_PHOTOS: 'FETCH_PHOTOS', // New action type for fetching photos
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
        selectedPhoto: action.payload.selectedPhoto,
      };
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
        selectedPhoto: null,
      };
    case actionTypes.FETCH_PHOTOS:
      const { photos } = action.payload;
      return {
        ...state,
        photos: photos, // Update the photos array with fetched data
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  // Initialize the state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    
    fetch("http://localhost:8001/api/topics")
    // parse JSON response received
    .then((response) => response.json())
    // data = the parsed JSON response
    .then((data) => {
      // Use dispatch to update the state properly
      console.log(data)
    })
    // Catch any errors and log them
    .catch((error) => {
      console.error("Error fetching topics:", error);
    });

    fetch("http://localhost:8001/api/photos")
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the fetched photo data to the reducer
        dispatch({ type: actionTypes.FETCH_PHOTOS, payload: { photos: data } });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []); // Ensure the effect runs only once when the component mounts

  const toggleFavourites = (photoId) => {
    // Dispatch the TOGGLE_FAVOURITES action
    dispatch({ type: actionTypes.TOGGLE_FAVOURITES, payload: { photoId } });
  };

  const openModal = (photo) => {
    // Dispatch the OPEN_MODAL action
    dispatch({ type: actionTypes.OPEN_MODAL, payload: { selectedPhoto: photo.data } });
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
    photos: state.photos, // Use photos from the state
    topics,
  };
};

export default useApplicationData;
