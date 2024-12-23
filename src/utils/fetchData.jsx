export const fetchData = async (apiCall, onSuccess, onError = () => {}) => {
    try {
      const response = await apiCall(); 
      if (onSuccess) onSuccess(response); 
    } catch (error) {
      console.error("API Error:", error); 
      if (onError) onError(error); 
    }
  };
