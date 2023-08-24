import { Suspense } from 'react';
import TicketList from './TicketList.jsx';
import Loading from '../loading.jsx';

//suspense permet d'appliquer un composant loading sur un composant complet avec un layout

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
