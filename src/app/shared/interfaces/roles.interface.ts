import { MenuItem } from "primeng/api";

export interface Roles{
    id?:string,
    nombre:string,
    descriptions?:string,
    estado:string
    items:MenuItem
}

// TODO:
// Activo, Papelera