import Link from 'next/link.js';
import { resolve } from 'styled-jsx/css';

async function getTickets() {
  //imate delay for testting loading feature
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      //revalidate: 30, //permet de recharger le cache toutes les 30 sec
      revalidate: 0, //plus gourmand en ressource mais on a le résultat desuite
    },
  });

  return res.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div className="card my-5" key={ticket.id}>
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title} </h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && <p className="text-center">No open ticket !</p>}
    </>
  );
}
