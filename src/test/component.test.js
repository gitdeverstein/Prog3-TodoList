import React from 'react';
import TodoList from '../components/TodoList';
import renderer from 'react-test-renderer';

describe("test entire component",()=>{
test('TodoList component should render correctly', () => {
    const component = renderer.create(<TodoList />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('TodoList component should add a task correctly', () => {
    const component = renderer.create(<TodoList />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    const addTaskButton = component.root.findByType('button');
    addTaskButton.props.onClick();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
