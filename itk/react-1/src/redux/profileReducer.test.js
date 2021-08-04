import profileReducer, { addPost, deletePost } from "./profileReducer";

const state = {
  posts: [
    { id: '1', message: 'Hi, how are you?', likesCount: 10 },
    { id: '2', message: "It's my first post", likesCount: 12 },
  ]
}

test('length of posts should be incremented', () => {
  let action = addPost('some new text');

  let newState =  profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

test('text of posts should be "some new text"', () => {
  let action = addPost('some new text');

  let newState =  profileReducer(state, action);
  expect(newState.posts[2].message).toBe('some new text');
});

test('likesCount of posts should be 0', () => {
  let action = addPost('some new text');

  let newState =  profileReducer(state, action);
  expect(newState.posts[2].likesCount).toBe(0);
});

test('after deleting length of posts should be decremented', () => {
  let action = deletePost(1);

  let newState =  profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

test('after deleting length of posts should`t be decremented if id is  incorrect', () => {
  let action = deletePost(100);

  let newState =  profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});