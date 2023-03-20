import { Outlet } from 'react-router-dom';
import { Header } from '@/features/header';

export function Layout() {
  return (
    <>
      <Header />
      <div className="App">
        <div className="card">
          <Outlet />
        </div>
      </div>
      <footer>
        <p className="read-the-docs">Copyrajt, orajt </p>
      </footer>
    </>
  );
}
