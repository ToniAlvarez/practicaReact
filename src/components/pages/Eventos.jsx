// src/pages/Eventos.jsx
import { useSelector, useDispatch } from 'react-redux';
import { joinEvent, leaveEvent } from '../store/eventsSlice';

const Eventos = () => {
  const dispatch = useDispatch();
  const { eventsList, userEvents } = useSelector((state) => state.events);

  return (
    <div className="container mx-auto px-6 py-8 text-gray-100">
      <h1 className="text-4xl font-extrabold text-indigo-950 mb-6">Eventos</h1>
      <div className="grid grid-cols-3 gap-4">
        {eventsList.map((event) => (
          <div key={event.id} className="p-4 bg-gray-800 rounded-lg">
            <h2 className="text-lg font-bold">{event.title}</h2>
            <p>{event.location}</p>
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-lg" />
            {userEvents.includes(event.id) ? (
              <button onClick={() => dispatch(leaveEvent(event.id))} className="mt-2 bg-red-500 px-4 py-2 rounded">Salir</button>
            ) : (
              <button onClick={() => dispatch(joinEvent(event.id))} className="mt-2 bg-green-500 px-4 py-2 rounded">Apuntarse</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventos;
