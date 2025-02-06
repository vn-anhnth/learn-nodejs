db.createUser({
    user: "anh",
    pwd: "12321",
    roles: [
        { role: "readWrite", db: "task-manager" },
        { role: "readWrite", db: "store-api" }
    ]
});
