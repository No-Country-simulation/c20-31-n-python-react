import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';

const CLIENT_ID =
  '676949433578-nbk7bdcihtd47ommrod2mq2721768r9u.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCx7HeOnMfbKBLGVApZ428sao9LEBDsJBU';
const DISCOVERY_DOC =
  'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

const GoogleCalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [authInstance, setAuthInstance] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    function start() {
      gapi.load('client:auth2', initClient);
    }

    function initClient() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [DISCOVERY_DOC],
          scope: SCOPES,
        })
        .then(() => {
          const auth = gapi.auth2.getAuthInstance();
          setAuthInstance(auth);
          setIsAuthenticated(auth.isSignedIn.get());
          auth.isSignedIn.listen(setIsAuthenticated);
        });
    }

    start();
  }, []);

  const handleAuthClick = () => {
    if (isAuthenticated) {
      authInstance.signOut();
    } else {
      authInstance.signIn().catch((error) => {
        if (error.error === 'popup_closed_by_user') {
          setErrorMessage(
            'The popup was closed before completing the authentication.',
          );
        } else {
          setErrorMessage('An error occurred during authentication.');
        }
      });
    }
  };

  const listUpcomingEvents = () => {
    gapi.client.calendar.events
      .list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        showDeleted: false,
        singleEvents: true,
        maxResults: 10,
        orderBy: 'startTime',
      })
      .then((response) => {
        const events = response.result.items;
        setEvents(events);
        setShowModal(true);
      })
      .catch((error) => {
        setErrorMessage(
          'An error occurred while retrieving events.',
          error,
        );
      });
  };

  return (
    <div>
      <button className='auth-button' onClick={handleAuthClick}>
        {isAuthenticated ? 'Sign Out' : 'Authorize'}
      </button>
      {isAuthenticated && (
        <button
          className='show-events-button'
          onClick={listUpcomingEvents}
        >
          Show Upcoming Events
        </button>
      )}
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>Upcoming Events</h2>
            <ul>
              {events.map((event, index) => (
                <li key={index}>
                  {event.summary} (
                  {event.start.dateTime || event.start.date})
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleCalendarComponent;
