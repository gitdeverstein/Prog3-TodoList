import React from "react";
import TodoList from "../components/TodoList";
import renderer from "react-test-renderer";
import App from "../App"

describe("run all", () => {
    it("renders run correctly", () => {
        const tree = renderer
            .create(<TodoList />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('App works correctly', () => {
        const renderComponent = renderer.create(<App/>).toJSON();
        expect(renderComponent).toMatchSnapshot()
    })
});


