import { handleShowToast, handleShowProgress } from '@/common/utils/util';

const dbName = 'uniform_sqlite';
const dbPath = '_doc/uniform_sqlite.db';
const dbVersion = '3';
const userTable = 'ter_userInfo';
const formTable = 'ter_uniform';

// 打开数据库
export const openSqlite = async () => {
  return new Promise((resolve, reject) => {
    let isOpen = plus.sqlite.isOpenDatabase({
      name: dbName,
      path: dbPath
    });
    if (isOpen) {
      console.log('SQLite已打开');
      resolve();
    } else {
      plus.sqlite.openDatabase({
        name: dbName,
        path: dbPath,
        version: dbVersion,
        success: async () => {
          console.log('打开SQLite成功');
          resolve();
        },
        fail: err => {
          handleSqlError('打开SQLite失败', err);
          reject(err);
        }
      });
    }
  });
};

// 创建表
export const createTable = (type) => {
  return new Promise((resolve, reject) => {
    let tableName = type == 'user' ? userTable : formTable;
    let dbSql = `id integer primary key autoincrement not null,username varchar(12) not null,password varchar(32) not null`;
    if (type == 'form') {
      dbSql = `id integer primary key autoincrement not null,checkTime varchar(20) not null,username varchar(12) not null,description varchar(32) not null,checkImage varchar(64) not null,correctTime varchar(20) not null,condition varchar(32) not null,correctImage varchar(64) not null,remark varchar(32)`;
    }
    let sql = `create table if not exists ${tableName}(${dbSql})`;
    plus.sqlite.executeSql({
      name: dbName,
      sql,
      success: () => {
        console.log(`SQLite创建${tableName}表成功`);
        resolve();
      },
      fail: err => {
        handleSqlError(`SQLite创建${tableName}表失败`, err);
        reject(err);
      }
    });
  });
};

// 插入数据
export const insertSqlite = async (type, cols, cb) => {
  let tableName = type == 'user' ? userTable : formTable;
  // let { checkTime, userName, description, checkImage, correctTime, correctCondition, correctImage, remark } = cols;
  let dbSql = `(username,password) values (${Object.values(cols)})`;
  if (type == 'form') {
    dbSql = `(checkTime,username,description,checkImage,correctTime,condition,correctImage,remark) values (${Object.values(cols)})`;
    // dbSql = `(checkTime,username,description,checkImage,correctTime,condition,correctImage,remark) values ("${checkTime}","${userName}","${description}","${checkImage}","${correctTime}","${correctCondition}","${correctImage}","${remark}")`;
  }
  let sql = `insert into ${tableName} ${dbSql}`;
  plus.sqlite.executeSql({
    name: dbName,
    sql,
    success: async () => {
      console.log('SQLite插入数据成功');
      cb & await cb();
    },
    fail: err => {
      handleSqlError('SQLite插入数据失败', err);
    }
  });
};

// 查询数据
export const querySqlite = ({ status, userName }, cb) => {
  try {
    let sql = `select * from ${formTable}`;
    if (status == 1) {
      sql = `select * from ${formTable} where user_name = ${userName}`;
    }
    plus.sqlite.selectSql({
      name: dbName,
      sql,
      success: async data => {
        console.log('SQLite查询数据', data);
        cb && await cb(data);
      },
      fail: async err => {
        handleSqlError('SQLite查询数据失败', err);
        cb && await cb(false);
      }
    });
  } catch (e) {
    console.log('SQLite查询失败', e);
    cb && cb(false);
  }
};

const handleSqlError = (msg, err) => {
  console.log(err);
  handleShowProgress(false);
  handleShowToast(msg);
};