
let renderEntireTree = () => {
    console.log("State change");
};

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, my friend', likesCount: 5},
            {id: 2, message: 'Good By, my girlfriend', likesCount: 27},
            {id: 3, message: 'Good By, my girlfriend', likesCount: 27},
            {id: 4, message: 'GGFFGDG', likesCount: 27},
            {id: 5, message: 'DGGDRRR', likesCount: 27},
            {id: 6, message: 'dgcdfd', likesCount: 27},
        ],
        newPostText: 'it-kamma'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'DIMAS'},
            {id: 2, name: 'Sergey'},
            {id: 3, name: 'Darya'},
            {id: 4, name: 'Valera'},
            {id: 5, name: 'Roman'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is you'},
            {id: 3, message: 'Miss'},
            {id: 4, message: 'Valera'},
            {id: 5, message: 'Yessss'},
        ],
    }
}

window.state = state;

export const addPost = () => {
    let newPost =  {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;
