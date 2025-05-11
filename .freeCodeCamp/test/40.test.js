const assert = require('assert');
const { getLastCommand, getCwd } = require('./utils');
const { Client } = require('pg');

const database = 'students';
const connectionString = `postgresql://postgres@localhost:5432/${database}`;

const client = new Client({
  connectionString: connectionString,
});

describe('You', () => {
  it('should run the suggested command', async () => {
    const cwd = await getCwd();
    const lastCommand = await getLastCommand();
    const query1 = `SELECT major_id FROM majors`;
    const query2 = `SELECT course_id FROM courses`;
    const query3 = `SELECT major_id FROM majors_courses`;
    const query4 = `SELECT student_id FROM students`;

    try {
      await client.connect();
      const res1 = await client.query(query1);
      const res2 = await client.query(query2);
      const res3 = await client.query(query3);
      const res4 = await client.query(query4);

      assert(res1.rowCount === 7 && res2.rowCount === 17 && res3.rowCount === 28 && res4.rowCount === 31 && lastCommand[0] === 'psql');
    } catch (err) {
      assert(false);
    } finally {
      await client.end();
    }
  });
});
