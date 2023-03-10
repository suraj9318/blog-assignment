export const addUserToLocalStorage = (data) => {
    localStorage.setItem('post', JSON.stringify(data));
};

export const getPostFromLocalStorage = () => {
    const result = localStorage.getItem('post');
    const user = result ? JSON.parse(result) : null;
    return user;
  };

  
