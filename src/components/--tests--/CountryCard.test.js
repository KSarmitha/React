import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContentComponent from "../CountryCard";
import MOCK_DATA from "../mocks/countryMock.json";
it("Should render country card", () => {
    render(
        <ContentComponent data={MOCK_DATA.data}/>
    )

    const name = screen.getByText("Region: Americas");

    expect(name).toBeInTheDocument();
})