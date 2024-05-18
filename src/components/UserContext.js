const { createContext } = require("react");

const UserContext = createContext({
    name: 'Sarmitha',
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
});

export default UserContext;