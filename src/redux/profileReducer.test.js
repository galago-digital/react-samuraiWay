import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";
import React from "react";

let state = {
    posts : [
        {id: 1, message: "hi? How are you?", likesCount: 15},
        {id: 2, message: "ololololol", likesCount: 10},
        {id: 3, message: "norm", likesCount: 5},
        {id: 4, message: "chivo", likesCount: 2}
    ]
}
test('length of posts should incremented', () => {
    let action = addPostActionCreator("TestText")
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(5)
});
test('message of new post is correct', () => {
    let action = addPostActionCreator("TestText")
    let newState = profileReducer(state,action)
    expect(newState.posts[4].message).toBe('TestText')
});
test('after delete message state.message is decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(3)
});
test('after delete message state.message is decrement if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state,action)
    expect(newState.posts.length).toBe(4)
});
