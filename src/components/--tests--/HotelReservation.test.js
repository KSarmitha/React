import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HotelReservation from "../HotelReservation";

test ("Should load hotel reservation component", () => {
    render (<HotelReservation />)

    const heading = screen.getByRole("button");

    expect(heading).toBeInTheDocument();
})

test ("Should have 2 input boxes in the reservation component", () => {
    render (<HotelReservation />)

    const textBoxes = screen.getAllByRole("textbox");

    expect(textBoxes.length).toBe(2);
})

test ("Should load textarea", () => {
    render (<HotelReservation />)

    const textarea = screen.getByPlaceholderText("Message");

    expect(textarea).toBeInTheDocument();
})