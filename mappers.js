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
    item: row.item,
    tipo: row.tipo,
    subtipo: row.subtipo,
    codigo: row.codigo,
    denominacion: row.denominacion,
    unidad: row.unidad,
    costo_fob: row.costo_fob,
    costo_fabrica: row.costo_fabrica,
    coeficiente: row.coeficiente
  };
}
