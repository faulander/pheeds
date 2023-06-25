import Database from 'better-sqlite3';
import bcrypt from 'bcrypt';

const db = new Database("pheeds.db", { verbose: console.log });
const createTableUsers = "CREATE TABLE IF NOT EXISTS users('username' varchar, 'password' varchar, PRIMARY KEY('username'))";

db.exec(createTableUsers);


export async function createUser(username: string, password: string): Promise<void> {
	const sql = `
  insert into users (username, password)
  values ($username, $password)
`;

	const hashedPassword = await bcrypt.hash(password, 12);

	const stmnt = db.prepare(sql);
	stmnt.run({ username, password: hashedPassword });
}


export async function checkUserCredentials(username: string, password: string): Promise<boolean> {
	const sql = `
  select password
    from users
   where username = $username
`;
	const stmnt = db.prepare(sql);
	const row = stmnt.get({ username });
	if (row) {
		return bcrypt.compare(password, row.password);
	} else {
		await bcrypt.hash(password, 12);
		return false;
	}
}
