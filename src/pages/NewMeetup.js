import { useHistory } from "react-router";
import NewMeetupForm from "../components/layout/meetups/NewMeetupForm"

const NewMeetup = () => {
    const history = useHistory();

    const addMeetupHandler = (meetupData) => {
        fetch(
            'https://react-getting-started-9826b-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'appliction/json'
                }
            }
        ).then(()=> {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    )
}

export default NewMeetup
