export const signUp = users => (
    $.ajax({
      url: '/api/users',
      method: 'POST',
      data: user,
    })
);
  
export const login = users => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: user,
    })
);
  
export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE',
    })
);
  