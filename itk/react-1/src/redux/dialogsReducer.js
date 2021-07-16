const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState =  {
    messages: [
      { id: '1', message: 'Hi' },
      { id: '2', message: 'Hello' },
      { id: '3', message: 'How are you?' },
      { id: '4', message: 'Good' },
      { id: '5', message: 'Thanks' },
      { id: '6', message: 'Good for you' },
      { id: '7', message: 'Yo' },
    ],
    dialogs: [
      {
        id: '1',
        name: 'Nick',
        userAvatar:
          'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
      },
      {
        id: '2',
        name: 'Kirill',
        userAvatar:
          'https://banner2.cleanpng.com/20180625/req/kisspng-computer-icons-avatar-business-computer-software-user-avatar-5b3097fcae25c3.3909949015299112927133.jpg',
      },
      {
        id: '3',
        name: 'Vlad',
        userAvatar:
          'https://banner2.cleanpng.com/20180529/eot/kisspng-computer-icons-clip-art-profile-avatar-5b0de499bbdc67.8725542215276371457695.jpg',
      },
      {
        id: '4',
        name: 'Sveta',
        userAvatar:
          'https://img.favpng.com/8/13/6/avatar-computer-icons-png-favpng-zapkeKu3xzjy6HwSaFu87UfGQ.jpg',
      },
      {
        id: '5',
        name: 'Alina',
        userAvatar:
          'https://banner2.cleanpng.com/20180329/bhe/kisspng-computer-icons-avatar-user-profile-human-5abcd90dcf1548.0400521415223257738482.jpg',
      },
      {
        id: '6',
        name: 'Pasha',
        userAvatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNWA656CRe97bqFdSiLSLH-gp6tfGFKMURg&usqp=CAU',
      },
      {
        id: '7',
        name: 'Sasha',
        userAvatar:
          'https://w7.pngwing.com/pngs/238/446/png-transparent-computer-icons-user-profile-avatar-old-man-face-heroes-head.png',
      },
    ],
  }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: 8,
                message: action.newMessageBody
                };
                return {...state,
                    messages: [...state.messages, newMessage]
                };
        
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;