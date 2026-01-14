import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

// === CONFIG ===
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// === HEALTH CHECK ===
app.get("/", (_req, res) => {
    res.json({ status: "ok" });
});

// === PRODUCTOS ===
app.get("/productos", async (_req, res) => {
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/productos?select=*`,
            {
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                },
            }
        );

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// === COSTOS ===
app.get("/costos", async (_req, res) => {
    try {
        const response = await fetch(
            `${SUPABASE_URL}/rest/v1/costos?select=*`,
            {
                headers: {
                    apikey: SUPABASE_ANON_KEY,
                    Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
                },
            }
        );

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// === START ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Backend corriendo en puerto ${PORT}`);
});
