/* eslint-disable no-undef */
// import {logRoles} from '@testing-library/dom'
// import {render, screen} from "@testing-library/react";
// import App from "./App";

// render: render method comes from react testing library and its create that simulated DOM, This is basically allow the tests
//to understand what we're testing against.means its creates the simulated DOM for whatever JS you give it as an argument.

// screen: The simulated DOM can be accessed via this global object called screen, which is also imported from react testing library.
// screen.getByText : it's trying to find the element that matches the text that we gave it. 
// /World!/i : regular expression, i here case insensive, and insted of this we can used string as well.

// test("finding text", () => {
//    render(<App />);
// //   const headingElement = screen.getByText("Hello World!");
//   const headingElement = screen.getByText(/World!/i);
//   expect(headingElement).toBeInTheDocument();
//   // here we are expecting headingElement to be in the document, means if we found the element that match this text, then the statement
//   // will be true and the test will succeed.
// });

// test("button starts with correct colors", () => {
//    const {container} = render(<App />);
//    logRoles("+++++++++++++++", container);
//    const buttonElement = screen.getByRole("button", {name: /blue/i});
//    expect(buttonElement).toHaveClass("red");
// })

test("button starts with correct colors", () => {
});