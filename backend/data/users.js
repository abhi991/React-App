import bcrypt from "bcryptjs"
const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'UserA',
        email: 'usera@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'UserB',
        email: 'userb@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users