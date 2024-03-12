import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const location = useLocation();
    const navigateTo = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [backgroundImageIndex, setBackgroundImageIndex] = useState(0); // State for tracking background image

    const revealMsg = async () => {
        try {
            setIsLoading(true);

            const account = location.state?.address;
            if (!account) {
                window.alert('Invalid account address');
                setIsLoading(false);
                return;
            }

            const res = await fetch('http://localhost:3000/members', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ from: account }),
            });

            const data = await res.json();
            if (data.status === 200) {
                navigateTo('/members');
            } else {
                window.alert('You currently do not hold any NFTs in the specified collection');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const changeBackground = () => {
        setBackgroundImageIndex((prevIndex) => (prevIndex + 1) % 3); // 3 is the number of NFT images
    };

    useEffect(() => {
        // Apply the background class to the body element when the component mounts
        document.body.classList.add(`nft-background-${backgroundImageIndex + 1}`);
        
        // Clean up the background class when the component unmounts
        return () => {
            document.body.classList.remove(`nft-background-${backgroundImageIndex + 1}`);
        };
    }, [backgroundImageIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            changeBackground();
        }, 5000); // Change background image every 5 seconds

        // Clean up the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="home-container">
            <span className="beautiful-sentence">
                I have a secret message for holders of my NFT collection with address : 0xd618581402226c92b14c9f4870799b3000ac4c77
            </span>
            <br /><br />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <button onClick={revealMsg}>Reveal Message Secretly🤫</button>
                    <button onClick={changeBackground}>Change Background☠️</button>
                </>
            )}
        </div>
    );
};

export default Home;
