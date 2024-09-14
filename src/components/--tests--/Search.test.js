import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Content from "../Content";
import MOCK_DATA from "../mocks/allCoutry.json";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

beforeAll (() => {
 console.log("render first")   
})
it("Should render content componenent with search button", async() => {
    await act (async() => 
        render(
            <BrowserRouter>
             <Provider store={appStore}>
                <Content/>
            </Provider>
            </BrowserRouter>
           
        ));

        const searchText = screen.getByTestId('searchText');
        fireEvent.change(searchText, {target: {value: 'south'}})

        const searchBtn = screen.getByRole("button", {name: "Search"});
        fireEvent.click(searchBtn);

        const regionCard = screen.getAllByTestId("regionCard");

        const filter = screen.getByTestId("filter");
        fireEvent.click(filter);

        const filterRegionCard = screen.getAllByTestId("regionCard");

        expect(filterRegionCard.length).toBe(3);

        expect(regionCard.length).toBe(2);
})