export default function GuestDetails({ selectedGuest, loading, onBack }) {
  if (loading) {
    return <p>loading...</p>;
  }

  if (!selectedGuest) {
    return <p>Please select a guest to see details.</p>;
  }
  return (
    <>
      <article className="card">
        <button className="back-button" onClick={onBack}>
          Back
        </button>
        <h2 className="card-title">{selectedGuest.name}</h2>
        <p className="card-details">Email:{selectedGuest.email}</p>
        <p className="card-details">Phone:{selectedGuest.phone}</p>
        <p className="card-details">Bio:{selectedGuest.bio}</p>
        <p className="card-details">Occupation:{selectedGuest.job}</p>
      </article>
    </>
  );
}
