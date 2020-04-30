
/* 
 * generated by zapatos (v0.1.23): git+https://github.com/jawj/zapatos.git
 * generated on 2020-04-30T20:35:53.770Z
 * 
 * MANUAL CHANGES ARE LIABLE TO GET OVERWRITTEN
 */
 
 /* tslint:disable */

  import {
    JSONValue,
    JSONArray,
    DateString,
    SQLFragment,
    SQL,
    GenericSQLExpression,
    ColumnNames,
    ColumnValues,
    ParentColumn,
    DefaultType,
  } from "./src/core";


/* === schema: public === */

/* --- enums --- */

export type appleEnvironment = 'PROD' | 'Sandbox';
export namespace every {
  export type appleEnvironment = ['PROD', 'Sandbox'];
}

/* --- tables --- */

export namespace appleTransactions {
  export type Table = "appleTransactions";
  export interface Selectable {
    environment: appleEnvironment;
    originalTransactionId: string;
    accountId: number;
    latestReceiptData: string | null;
  }
  export interface Insertable {
    environment: appleEnvironment | SQLFragment;
    originalTransactionId: string | SQLFragment;
    accountId: number | SQLFragment;
    latestReceiptData?: string | null | DefaultType | SQLFragment;
  }
  export interface Updatable extends Partial<Insertable> { }
  export type Whereable = { [K in keyof Insertable]?: Exclude<Insertable[K] | ParentColumn, null | DefaultType> };
  export type JSONSelectable = { [K in keyof Selectable]:
    Date extends Selectable[K] ? Exclude<Selectable[K], Date> | DateString :
    Date[] extends Selectable[K] ? Exclude<Selectable[K], Date[]> | DateString[] :
    Selectable[K]
  };
  export type Column = keyof Selectable;
  export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
  export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
  export type SQL = SQLExpression | SQLExpression[];
}

export namespace authors {
  export type Table = "authors";
  export interface Selectable {
    id: number;
    name: string;
    isLiving: boolean | null;
  }
  export interface Insertable {
    id?: number | DefaultType | SQLFragment;
    name: string | SQLFragment;
    isLiving?: boolean | null | DefaultType | SQLFragment;
  }
  export interface Updatable extends Partial<Insertable> { }
  export type Whereable = { [K in keyof Insertable]?: Exclude<Insertable[K] | ParentColumn, null | DefaultType> };
  export type JSONSelectable = { [K in keyof Selectable]:
    Date extends Selectable[K] ? Exclude<Selectable[K], Date> | DateString :
    Date[] extends Selectable[K] ? Exclude<Selectable[K], Date[]> | DateString[] :
    Selectable[K]
  };
  export type Column = keyof Selectable;
  export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
  export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
  export type SQL = SQLExpression | SQLExpression[];
}

export namespace bankAccounts {
  export type Table = "bankAccounts";
  export interface Selectable {
    id: number;
    balance: number;
  }
  export interface Insertable {
    id?: number | DefaultType | SQLFragment;
    balance?: number | DefaultType | SQLFragment;
  }
  export interface Updatable extends Partial<Insertable> { }
  export type Whereable = { [K in keyof Insertable]?: Exclude<Insertable[K] | ParentColumn, null | DefaultType> };
  export type JSONSelectable = { [K in keyof Selectable]:
    Date extends Selectable[K] ? Exclude<Selectable[K], Date> | DateString :
    Date[] extends Selectable[K] ? Exclude<Selectable[K], Date[]> | DateString[] :
    Selectable[K]
  };
  export type Column = keyof Selectable;
  export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
  export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
  export type SQL = SQLExpression | SQLExpression[];
}

export namespace books {
  export type Table = "books";
  export interface Selectable {
    id: number;
    authorId: number;
    title: string | null;
    createdAt: Date;
    updatedAt: Date;
  }
  export interface Insertable {
    id?: number | DefaultType | SQLFragment;
    authorId: number | SQLFragment;
    title?: string | null | DefaultType | SQLFragment;
    createdAt?: Date | DateString | DefaultType | SQLFragment;
    updatedAt?: Date | DateString | DefaultType | SQLFragment;
  }
  export interface Updatable extends Partial<Insertable> { }
  export type Whereable = { [K in keyof Insertable]?: Exclude<Insertable[K] | ParentColumn, null | DefaultType> };
  export type JSONSelectable = { [K in keyof Selectable]:
    Date extends Selectable[K] ? Exclude<Selectable[K], Date> | DateString :
    Date[] extends Selectable[K] ? Exclude<Selectable[K], Date[]> | DateString[] :
    Selectable[K]
  };
  export type Column = keyof Selectable;
  export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
  export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
  export type SQL = SQLExpression | SQLExpression[];
}

export namespace emailAuthentication {
  export type Table = "emailAuthentication";
  export interface Selectable {
    email: string;
    consecutiveFailedLogins: number;
    lastFailedLogin: Date | null;
  }
  export interface Insertable {
    email: string | SQLFragment;
    consecutiveFailedLogins?: number | DefaultType | SQLFragment;
    lastFailedLogin?: Date | DateString | null | DefaultType | SQLFragment;
  }
  export interface Updatable extends Partial<Insertable> { }
  export type Whereable = { [K in keyof Insertable]?: Exclude<Insertable[K] | ParentColumn, null | DefaultType> };
  export type JSONSelectable = { [K in keyof Selectable]:
    Date extends Selectable[K] ? Exclude<Selectable[K], Date> | DateString :
    Date[] extends Selectable[K] ? Exclude<Selectable[K], Date[]> | DateString[] :
    Selectable[K]
  };
  export type Column = keyof Selectable;
  export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
  export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
  export type SQL = SQLExpression | SQLExpression[];
}

export namespace employees {
  export type Table = "employees";
  export interface Selectable {
    id: number;
    name: string;
    managerId: number | null;
  }
  export interface Insertable {
    id?: number | DefaultType | SQLFragment;
    name: string | SQLFragment;
    managerId?: number | null | DefaultType | SQLFragment;
  }
  export interface Updatable extends Partial<Insertable> { }
  export type Whereable = { [K in keyof Insertable]?: Exclude<Insertable[K] | ParentColumn, null | DefaultType> };
  export type JSONSelectable = { [K in keyof Selectable]:
    Date extends Selectable[K] ? Exclude<Selectable[K], Date> | DateString :
    Date[] extends Selectable[K] ? Exclude<Selectable[K], Date[]> | DateString[] :
    Selectable[K]
  };
  export type Column = keyof Selectable;
  export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
  export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
  export type SQL = SQLExpression | SQLExpression[];
}

export namespace stores {
  export type Table = "stores";
  export interface Selectable {
    id: number;
    name: string;
    geom: any;
  }
  export interface Insertable {
    id?: number | DefaultType | SQLFragment;
    name: string | SQLFragment;
    geom: any | SQLFragment;
  }
  export interface Updatable extends Partial<Insertable> { }
  export type Whereable = { [K in keyof Insertable]?: Exclude<Insertable[K] | ParentColumn, null | DefaultType> };
  export type JSONSelectable = { [K in keyof Selectable]:
    Date extends Selectable[K] ? Exclude<Selectable[K], Date> | DateString :
    Date[] extends Selectable[K] ? Exclude<Selectable[K], Date[]> | DateString[] :
    Selectable[K]
  };
  export type Column = keyof Selectable;
  export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
  export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
  export type SQL = SQLExpression | SQLExpression[];
}

export namespace tags {
  export type Table = "tags";
  export interface Selectable {
    tag: string;
    bookId: number;
  }
  export interface Insertable {
    tag: string | SQLFragment;
    bookId: number | SQLFragment;
  }
  export interface Updatable extends Partial<Insertable> { }
  export type Whereable = { [K in keyof Insertable]?: Exclude<Insertable[K] | ParentColumn, null | DefaultType> };
  export type JSONSelectable = { [K in keyof Selectable]:
    Date extends Selectable[K] ? Exclude<Selectable[K], Date> | DateString :
    Date[] extends Selectable[K] ? Exclude<Selectable[K], Date[]> | DateString[] :
    Selectable[K]
  };
  export type Column = keyof Selectable;
  export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
  export type SQLExpression = GenericSQLExpression | Table | Whereable | Column | ColumnNames<Updatable | (keyof Updatable)[]> | ColumnValues<Updatable>;
  export type SQL = SQLExpression | SQLExpression[];
}

/* --- cross-table types --- */

export type Table = appleTransactions.Table | authors.Table | bankAccounts.Table | books.Table | emailAuthentication.Table | employees.Table | stores.Table | tags.Table;
export type Selectable = appleTransactions.Selectable | authors.Selectable | bankAccounts.Selectable | books.Selectable | emailAuthentication.Selectable | employees.Selectable | stores.Selectable | tags.Selectable;
export type Whereable = appleTransactions.Whereable | authors.Whereable | bankAccounts.Whereable | books.Whereable | emailAuthentication.Whereable | employees.Whereable | stores.Whereable | tags.Whereable;
export type Insertable = appleTransactions.Insertable | authors.Insertable | bankAccounts.Insertable | books.Insertable | emailAuthentication.Insertable | employees.Insertable | stores.Insertable | tags.Insertable;
export type Updatable = appleTransactions.Updatable | authors.Updatable | bankAccounts.Updatable | books.Updatable | emailAuthentication.Updatable | employees.Updatable | stores.Updatable | tags.Updatable;
export type Column = appleTransactions.Column | authors.Column | bankAccounts.Column | books.Column | emailAuthentication.Column | employees.Column | stores.Column | tags.Column;
export type AllTables = [appleTransactions.Table, authors.Table, bankAccounts.Table, books.Table, emailAuthentication.Table, employees.Table, stores.Table, tags.Table];


export type SelectableForTable<T extends Table> = {
  appleTransactions: appleTransactions.Selectable,
  authors: authors.Selectable,
  bankAccounts: bankAccounts.Selectable,
  books: books.Selectable,
  emailAuthentication: emailAuthentication.Selectable,
  employees: employees.Selectable,
  stores: stores.Selectable,
  tags: tags.Selectable,
}[T];

export type WhereableForTable<T extends Table> = {
  appleTransactions: appleTransactions.Whereable,
  authors: authors.Whereable,
  bankAccounts: bankAccounts.Whereable,
  books: books.Whereable,
  emailAuthentication: emailAuthentication.Whereable,
  employees: employees.Whereable,
  stores: stores.Whereable,
  tags: tags.Whereable,
}[T];

export type InsertableForTable<T extends Table> = {
  appleTransactions: appleTransactions.Insertable,
  authors: authors.Insertable,
  bankAccounts: bankAccounts.Insertable,
  books: books.Insertable,
  emailAuthentication: emailAuthentication.Insertable,
  employees: employees.Insertable,
  stores: stores.Insertable,
  tags: tags.Insertable,
}[T];

export type UpdatableForTable<T extends Table> = {
  appleTransactions: appleTransactions.Updatable,
  authors: authors.Updatable,
  bankAccounts: bankAccounts.Updatable,
  books: books.Updatable,
  emailAuthentication: emailAuthentication.Updatable,
  employees: employees.Updatable,
  stores: stores.Updatable,
  tags: tags.Updatable,
}[T];

export type ColumnForTable<T extends Table> = {
  appleTransactions: appleTransactions.Column,
  authors: authors.Column,
  bankAccounts: bankAccounts.Column,
  books: books.Column,
  emailAuthentication: emailAuthentication.Column,
  employees: employees.Column,
  stores: stores.Column,
  tags: tags.Column,
}[T];

export type SQLForTable<T extends Table> = {
  appleTransactions: appleTransactions.SQL,
  authors: authors.SQL,
  bankAccounts: bankAccounts.SQL,
  books: books.SQL,
  emailAuthentication: emailAuthentication.SQL,
  employees: employees.SQL,
  stores: stores.SQL,
  tags: tags.SQL,
}[T];

