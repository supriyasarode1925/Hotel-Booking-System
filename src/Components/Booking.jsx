import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Booking = () => {
    return(
        <>
        <Container fluid className="my-3">
            <h1> Hotel Booking Page</h1>
            <h3> Welcome to hotel booking page</h3>
            <p> You can Book hotel now with many more feature </p>
            <Link to="/success">
                <button className="px-4 py-2 mx-2 mb-2 hero-btn text-white border-0">Confirm Booking</button>
            </Link>
        </Container>
        </>

    )
} 