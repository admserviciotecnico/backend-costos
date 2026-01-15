export function mapProducto(db) {
  return {
    id: db.legacy_id,              // o índice incremental
    codigo: db.codigo,
    denominacion: db.denominacion,
    linea: db.linea,
    serie: db.serie
  };
}

export function mapCosto(db) {
  return {
    id: db.legacy_id,
    producto_id: db.producto_legacy_id,
    concepto: db.concepto,
    valor: db.valor,
    unidad: db.unidad
  };
}
