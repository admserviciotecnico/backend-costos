export function mapProducto(db) {
  return {
    id: db.legacy_id,              // o índice incremental
    codigo: db.codigo,
    denominacion: db.denominacion,
    linea: db.linea,
    serie: db.serie
  };
}

export function mapCosto(row) {
  return {
    id: row.id,
    item: null,                         // no existe en Supabase
    tipo: row.categoria,                // ← mapeo correcto
    subtipo: row.subcategoria,           // ← mapeo correcto
    codigo: null,                       // no existe
    denominacion: row.descripcion,       // ← mapeo correcto
    unidad: row.unidad,
    costo_fob: row.costo_fob,
    costo_fabrica: row.costo_fabrica,
    coeficiente: row.coeficiente
  };
}
