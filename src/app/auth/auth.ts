export default function isLoggedIn() : boolean {
  return localStorage.getItem('isLoggedIn') === 'true';
}
