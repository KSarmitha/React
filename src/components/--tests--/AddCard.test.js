import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Cart from "../Cart";
import Content from "../Content";
import MOCK_DATA from "../mocks/allCoutry.json";
import TopbarComponent from "../Topbar";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should render content componenent with search button", async() => {
    await act (async() => 
        render(
            <BrowserRouter>
             <Provider store={appStore}>
                <TopbarComponent/>
                <Cart/>
                <Content/>
            </Provider>
            </BrowserRouter>
        ));

        const allCountry = screen.getAllByTestId("addToCart");

        fireEvent.click(allCountry[2]);
        fireEvent.click(allCountry[4]);

        const cartCount = screen.getByText("2 Selected");
        expect(cartCount).toBeInTheDocument();

        const countryListCount = screen.getAllByTestId("countryList");
        expect(countryListCount.length).toBe(2);
    })