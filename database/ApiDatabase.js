import sql from "./postgresql.js";

export default class Database{
    getUsers(id = undefined){
        if(id){
            return sql`SELECT * FROM users WHERE id=${id}`
        }else{
            return sql`SELECT * FROM users`;
        }
        
    }

    setUser(id, name, idade){
        return sql`
        INSERT INTO users(id, name, idade)
        VALUES(${id}, ${name}, ${idade})
        `
    }

    deleteUser(id){
        return sql`DELETE FROM users WHERE id=${id}`
    }

    updateUser(id, idade){
        return sql`UPDATE users
        SET idade = ${idade}
        WHERE id = ${id}
        `
    }
}