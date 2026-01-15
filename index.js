import express from "express";
import cors from "cors";
import { supabaseSelect, supabaseInsert } from "./supabase.js";
import { mapProducto, mapCosto } from "./mappers.js";

const app = express();
app.use(cors());
app.use(express.json());

/* =====================
   PRODUCTOS
===================== */
app.get("/api/productos", async (_req, res) => {
  const rows = await supabaseSelect("productos", "select=*");
  res.json(rows.map(mapProducto));
});

/* =====================
   COSTOS
===================== */
app.get("/api/costos", async (_req, res) => {
  const rows = await supabaseSelect("costos", "select=*");

  console.log("ROW CRUDO:", rows[0]);
  console.log("ROW MAPEADO:", mapCosto(rows[0]));

  res.json(rows.map(mapCosto));
});


/* =====================
   COSTEO (POST)
===================== */
app.post("/api/costeos", async (req, res) => {
  // lógica igual a FastAPI
  const resultado = {/* cálculo */};
  res.json(resultado);
});

/* =====================
   START
===================== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log("🚀 API compatible con Base44 levantada")
);

