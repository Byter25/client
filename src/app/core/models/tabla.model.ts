export interface Campos{
  nombre:String,
  tipo:String
}

export function filtrarCampos(campos:Campos[]):Campos[]{
  return campos.filter(c=>{
    return c.nombre !='createdAt' &&
    c.nombre !='updatedAt' &&
    c.nombre !='_id'
  })
}
