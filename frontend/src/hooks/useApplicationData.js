import React, { useReducer, useEffect } from 'react';
import topics from 'mocks/topics';

// Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favourites: [],
  topics: [],
  photos: [], // Initialize photos array
  topic: undefined,
};

// Define action types
const actionTypes = {
  TOGGLE_FAVOURITES: 'TOGGLE_FAVOURITES',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  FETCH_PHOTOS: 'FETCH_PHOTOS',
  FETCH_TOPICS: 'FETCH_TOPICS',
  SET_TOPIC: 'SET_TOPIC',
  RESET_TOPIC: 'RESET_TOPIC',
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
        photos: photos,
      };
    case actionTypes.FETCH_TOPICS:
      const { topics } = action.payload;
      return {
        ...state,
        topics: topics,
      };
    case actionTypes.SET_TOPIC:
      const { topic } = action.payload;
      return {
        ...state,
        topic: topic,
      };
    case actionTypes.RESET_TOPIC:
      return {
        ...state,
        topic: undefined,
      };
    default:
      return state;
  }
};

const useApplicationData = () => {
  // Initialize the state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let url = "/api/photos";

    if (state.topic !== undefined) {
      url = `http://localhost:8001/api/topics/photos/${state.topic}`;
    }

    fetch("http://localhost:8001/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCH_TOPICS, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actionTypes.FETCH_PHOTOS, payload: data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, [state.topic]);

  const toggleFavourites = (photoId) => {
    dispatch({ type: actionTypes.TOGGLE_FAVOURITES, payload: { photoId } });
  };

  const openModal = (photo) => {
    dispatch({ type: actionTypes.OPEN_MODAL, payload: { selectedPhoto: photo.data } });
  };

  const closeModal = () => {
    dispatch({ type: actionTypes.CLOSE_MODAL });
  };

  const updateTopic = (newTopic) => {
    dispatch({ type: actionTypes.SET_TOPIC, payload: { topic: newTopic } });
  };

  const resetTopic = () => {
    dispatch({ type: actionTypes.RESET_TOPIC });
  };

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favourites: state.favourites,
    toggleFavourites,
    openModal,
    closeModal,
    photos: state.photos,
    topics: state.topics,
    topic: state.topic,
    updateTopic,
    resetTopic,
  };
};

export default useApplicationData;
