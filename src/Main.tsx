import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getUserIdAsync } from './app/auth/msalProvider';


function Main() {

    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const id = await getUserIdAsync();
                setUserId(id || ''); // Ensure userId is a string
            } catch (error) {
                console.error('Error fetching user ID:', error);
            }
        };
        fetchUserId();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    if (userId === '') {
        return <LoadingScreen />
    } else {
        return <RedirectUser userId={userId} />
    }
}


const RedirectUser = ({ userId }: { userId: string }) => {
    const azurePortalUrl = "webappmsal2.azurewebsites.net";
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const shouldRedirect = userId !== "GIOVANNIMELVILLE.BELDA@emea.nttdata.com";
        if (shouldRedirect) {
            window.location.href = azurePortalUrl;
        } else {
            setLoading(false); // If no redirection occurs, set loading state to false
        }
    }, [userId, azurePortalUrl]);

    const dataToSend = {
        param1: 'value1',
        param2: 'value2'
    };

    const handleRouteData = () => {
        const queryString = new URLSearchParams(dataToSend).toString();
        const targetURL = `webappmsal2.azurewebsites.net?${queryString}`;

        window.location.href = targetURL;
    };

    if (loading) {
        return null; // Render nothing while loading
    }

    // Render content if no redirection occurs
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    THIS IS APP 1
                </p>
                <button onClick={() => handleRouteData()}>Route Data Query</button>
            </header>
        </div>
    );
};
const LoadingScreen = () => <div>Loading...</div>;

export default Main