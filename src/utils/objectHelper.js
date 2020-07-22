export let updateObjectInArray = (items, itemId, objectPropName, newObjProps) =>{
    items.map(u => {
    if (u[objectPropName] === itemId) {
        return {...u, ...newObjProps}
    }
    return u;
})}