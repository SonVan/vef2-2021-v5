import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>404 Síða ekki til</h1>

      <Link to="/">Til baka</Link>
    </div>
  );
}
