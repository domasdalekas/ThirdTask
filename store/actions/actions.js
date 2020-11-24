export function addAd(name,text,id){
    return {type:'ADD_AD',name:name, text:text,id:id}
}
export function showAll() {
    return {type:'SHOW_ALL'};
}
export function deleteAd(id) {
    return {type:'DELETE_AD',id:id}
}
export function editAD(name, text,id) {
    return {type: 'EDIT_AD',name: name, text: text, id: id};
  }