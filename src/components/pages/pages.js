
const pages = new Map();
pages.set('home', { name: 'Home', path: '/', linkable: true });
pages.set('about', { name: 'About', path: '/about', linkable: true });
pages.set('menu', { name: 'Menu', path: '/menu', linkable: true });
pages.set('bookings', { 
  name: 'Reservations', 
  path: '/bookings', 
  linkable: true 
});
pages.set('confirmedBooking', { 
  name: 'Confirmed Booking', 
  path: '/confirmed', 
  linkable: false 
});
pages.set('orderOnline', { 
  name: 'Order Online', 
  path: '/order', 
  linkable: true 
});
pages.set('login', { name: 'Login', path: '/login', linkable: true });

export default pages;