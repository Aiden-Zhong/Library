import { useState, useEffect } from "react";
import MeetupList from "../components/layout/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://cdn.cnn.com/cnnnext/dam/assets/181215042152-nasa-juno-01-large-169.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

const AllMeetup = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://react-getting-started-9826b-default-rtdb.firebaseio.com/meetups.json'
    ).then((response) => {
      return response.json();
    }).then(data => {
      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadMeetups(meetups);
    });
  }, []);



  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetup
