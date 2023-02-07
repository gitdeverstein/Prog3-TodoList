import React from "react";
import { create } from "react-test-renderer";
import TodoList from "../components/TodoList";

it("matches the snapshot", () => {
        const component = create(<TodoList />);
        expect(component.toJSON()).toMatchSnapshot();
    });

