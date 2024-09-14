import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import TopbarComponent from "../Topbar";
it("Should have Login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <TopbarComponent />
            </Provider>
        </BrowserRouter>
)

const loginBtn = screen.getByRole("button", {name: "Login"});

expect(loginBtn).toBeInTheDocument();
})

//Regex
it("Should render cart", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <TopbarComponent />
            </Provider>
        </BrowserRouter>
)

const cart = screen.getByText(/Cart/);

expect(cart).toBeInTheDocument();
})

//Fire Event
it("Should Logout when click Login", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <TopbarComponent />
            </Provider>
        </BrowserRouter>
)

const loginBtn = screen.getByRole("button", {name: "Login"});

fireEvent.click(loginBtn);

const logoutBtn = screen.getByRole("button", {name: "Logout"});

expect(logoutBtn).toBeInTheDocument();
})