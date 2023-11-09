import { useReducer, useEffect } from 'react';

// Define the initial state
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  favourites: [],
  topics : [],
  photos: [], // Initialize photos array
  topic : undefined
};

// Define action types
const actionTypes = {
  TOGGLE_FAVOURITES: 'TOGGLE_FAVOURITES',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  FETCH_PHOTOS: 'FETCH_PHOTOS', // New action type for fetching photos
  FETCH_TOPICS : 'FETCH_TOPICS',
  SET_TOPIC : 'SET_TOPIC'
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
      case actionTypes.FETCH_TOPICS:
        const { topics } = action.payload;
        return {
          ...state,
          topics: topics,
        }; 
      case actionTypes.SET_TOPIC:
        const {topic} = action.payload;  
        return {            
          ...state,
          topic: topic,
        };              
    default:
      return state;
  }
};

const useApplicationData = () => {
  // Initialize the state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    
    //If state topic is not undefined, then set URL to lead to topic photo content

    fetch("/api/topics")
    .then((response) => response.json())
    .then((data) => {
      dispatch({type : actionTypes.FETCH_TOPICS, payload : { topics : data }})
    })
    .catch((error) => {
      console.error("Error fetching topics:", error);
    });

    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        // Dispatch the fetched photo data to the reducer
        dispatch({ type: actionTypes.FETCH_PHOTOS, payload: { photos: data } });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
      
  }, []); // Ensure the effect runs only once when the component mounts

  useEffect(()=>{
    if (!state.topic) return
    fetch(`/api/topics/photos/${state.topic}`)
    .then((response)=> response.json())
    .then((topicPhotos)=>{
      dispatch({ type : actionTypes.FETCH_PHOTOS, payload : {photos : topicPhotos }})
    }) 
    .catch((error) => {
      console.error("Error fetching photos:", error);
    });
  }, [state.topic]);

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

  const updateTopic = (newTopic) => {
    dispatch({ type: actionTypes.SET_TOPIC, payload: { topic: newTopic } });
  };

  return {
    isModalOpen: state.isModalOpen,
    selectedPhoto: state.selectedPhoto,
    favourites: state.favourites,
    updateTopic,
    toggleFavourites,
    openModal,
    closeModal,
    photos: state.photos, // Use photos from the state
    topics : state.topics,
  };
};

export default useApplicationData;
