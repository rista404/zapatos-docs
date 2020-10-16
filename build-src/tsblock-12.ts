
        import * as xyz from './zapatos/src';
        xyz.setConfig({
          queryListener: (x: any, txnId?: number) => {
            if (txnId != null) console.log('%%txnId%:' + txnId + '%%');
            console.log('%%text%:' + x.text + '%%');
            if (x.values.length) {
              console.log('%%values%:[' + x.values.map((v: any) => JSON.stringify(v)).join(', ') + ']%%');
            }
          },
          resultListener: (x: any, txnId?: number) => {
            if (x != null && (false || !(Array.isArray(x) && x.length === 0))) {
              if (txnId != null) console.log('%%txnId%:' + txnId + '%%');
              console.log('%%result%:' + JSON.stringify(x, null, 2) + '%%');
            }
          },
          transactionListener: (x: any, txnId?: number) => {
            if (txnId != null) console.log('%%txnId%:' + txnId + '%%');
            console.log('%%transaction%:' + x + '%%');
          },
        });
        
          import * as db from './zapatos/src';
          import { conditions as dc } from './zapatos/src';
          import * as s from './zapatos/schema';
          import pool from './pgPool';
        

        try {
        /* original script begins */
        // the <const> prevents generalization to string[]
const bookCols = <const>['id', 'title'];
type BookDatum = s.books.OnlyCols<typeof bookCols>;

const
  bookData = await db.sql<s.books.SQL, BookDatum[]>`
    SELECT ${db.cols(bookCols)} FROM ${"books"}`.run(pool);

        /* original script ends */
        } catch(e) {
          console.log(e.name + ': ' + e.message);
          console.error('  -> error: ' + e.message);
        }

        await pool.end();
      