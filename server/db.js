const Pool = require("pg").Pool;
const pool = new Pool({        // <-- was "new pool" (lowercase) — must match "Pool" exactly, case-sensitive
    user: "postgres",
    password: "12345678",
    host: "localhost",
    port: 5432,                // <-- was "post" (typo) — must be "port". Also check your actual port.
    database: "perntodo"
});

module.exports = pool;