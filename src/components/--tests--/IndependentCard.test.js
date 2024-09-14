import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Content from "../Content";
import IndependentCountryCard from "../IndependentCountryCard";
import COUNTRY_MOCK_DATA from "../mocks/allCoutry.json";
import AVTART from "../mocks/countryAvatar.json";
import MOCK_DATA from "../mocks/countryMock.json";

global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                if (COUNTRY_MOCK_DATA) {
                    return Promise.resolve({
                                json: () => Promise.resolve(AVTART)
                            })
                }
                return Promise.resolve(COUNTRY_MOCK_DATA)
            }
        });    
})
it("Should render HOC component by load data", async() => {
    const WrappedComponent = IndependentCountryCard(Content);

    await act(async() => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <WrappedComponent data={MOCK_DATA.data}/>
                </Provider>
            </BrowserRouter>
        )
    )
     
    const independentLabel = screen.getByText("Independent");

    expect(independentLabel).toBeInTheDocument();
})