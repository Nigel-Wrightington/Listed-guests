import GuestList from "./components/GuestList";
import GuestDetails from "./components/GuestDetails";
import { getGuests, getGuestById } from "./API/Guests";
import { useEffect, useState } from "react";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [loading, setLoading] = useState(false);

  console.log("selected guests", selectedGuest);

  //fetch all recipes when app starts
  useEffect(() => {
    async function loadGuests() {
      try {
        const data = await getGuests();
        console.log("data from API", data);
        setGuests(data);
      } catch (error) {
        console.error("error loading guests", error);
      }
    }
    loadGuests();
  }, []);

  //fetch a single guest
  useEffect(() => {
    if (!selectedGuestId) return;
    async function loadSingleGuest() {
      setLoading(true);
      try {
        const data = await getGuestById(selectedGuestId);
        setSelectedGuest(data);
      } catch (error) {
        console.error("error loading single guest", error);
      } finally {
        setLoading(false);
      }
    }
    loadSingleGuest();
  }, [selectedGuestId]);

  return (
    <main className="container">
      {selectedGuestId ? (
        <GuestDetails
          selectedGuest={selectedGuest}
          loading={loading}
          onBack={() => {
            setSelectedGuestId(null);
            setSelectedGuest(null);
          }}
        />
      ) : (
        <GuestList guests={guests} setSelectedGuestId={setSelectedGuestId} />
      )}
    </main>
  );
}
