export const fetchSpectacles = () => (
    $.ajax({
      method: 'GET',
      url: '/api/spectacles'
    })
  );
  
  export const fetchSpectacle = id => (
    $.ajax({
      method: 'GET',
      url: `/api/spectacles/${id}`,
    })
  );


