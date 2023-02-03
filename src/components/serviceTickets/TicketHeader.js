import React from "react"
import { Link } from "react-router-dom"
import "./Tickets.css"

export const TicketHeader = ({ ticket }) => {
    return <header className="ticket__header">
        <div className="ticket__customer">
            <Link to={`/serviceTickets/${ticket.id}`}>Ticket #{ticket.id}</Link>
        </div>
    </header>
}
