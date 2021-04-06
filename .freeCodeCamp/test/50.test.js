const assert = require('assert');
const { getLastLog } = require('./utils');

describe('You', () => {
  it('should list the databases', async () => {
    const lastLog = await getLastLog(true);

    assert(/statement:SELECTd\.datnameas"Name",pg_catalog\.pg_get_userbyid\(d\.datdba\)as"Owner",pg_catalog\.pg_encoding_to_char\(d\.encoding\)as"Encoding",d\.datcollateas"Collate",d\.datctypeas"Ctype",pg_catalog\.array_to_string\(d\.datacl,E'\\n'\)AS"Accessprivileges"FROMpg_catalog\.pg_databasedORDERBY1;/.test(lastLog));
  });
});
