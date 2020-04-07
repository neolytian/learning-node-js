db.createUser(
    {
        user: "testuser",
        pwd: "test1234",
        roles: [
            {
                role: "readWrite",
                db : "graphgl_db"
            }
        ]
    }
)