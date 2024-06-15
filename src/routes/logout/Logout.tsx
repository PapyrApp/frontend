import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem('token');
      navigate('/');
    }, 500);
  }, [navigate]);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}
