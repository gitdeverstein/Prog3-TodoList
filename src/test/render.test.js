import React from 'react';
import TodoList from '../components/TodoList';
import renderer from 'react-test-renderer';

describe('run entire task test', () => {
    const component = renderer.create(<TodoList />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();


it('adds a task work correctly', () => {
    const component = renderer.create(<TodoList />);

    const input = component.root.findByType('input');
    input.props.onChange({target: {value: 'Test task'}});

    const addButton = component.root.findByProps({children: 'Add'});
    addButton.props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('completes a task correctly', () => {
    const component = renderer.create(<TodoList />);

    const input = component.root.findByType('input');
    input.props.onChange({target: {value: 'Test task'}});

    const addButton = component.root.findByProps({children: 'Add'});
    addButton.props.onClick();

    tree = component.toJSON();

    const checkbox = component.root.findAllByType('input')[1];
    checkbox.props.onClick();

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
})
