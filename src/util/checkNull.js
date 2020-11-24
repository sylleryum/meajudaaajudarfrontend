/**
 *
 * @param toCheck what to check if null
 * @param toReturn (optional) if present, instead of returning toCheck, it will return this param
 * @returns if null, returns "Não disponivel"; returns toReturn if param is present and not null, if not, returns toCheck
 */
export const checkNull = (toCheck, toReturn) =>{
    if (toCheck!==null){
        return toReturn===undefined?toCheck:toReturn
    }
    return "Não disponivel"
}