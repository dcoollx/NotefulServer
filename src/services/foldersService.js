module.exports = {
  getAllfolders(db){
    return db.select('*').from('folders');

  },
  getNotesByFolderId(db,id){
    return db.select('*').from('folders').where({id});
  },
  addNewFolder(db,newFolder){
    return db.insert(newFolder).into('folders').returning('*');
  },
  deleteFolder(db,id){
    return db('folders').where({id}).delete();
  },
  updateFolder(db,id,name){
    return db('folders').update({name}).where({id}).returning('*');
  }
};