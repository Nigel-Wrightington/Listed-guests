export default function GuestList({ guests, setSelectedGuestId }) {
  return (
    <>
      <h1 className="title">Guest List</h1>
      {guests.length === 0 ? (
        <p>No Guests yet...</p>
      ) : (
        <ul className="list">
          {guests.map((guest) => {
            return (
              <li
                key={guest.id}
                className="list-item"
                onClick={() => setSelectedGuestId(guest.id)}
              >
                <span>{guest.name}</span>
                <span>{guest.email}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
