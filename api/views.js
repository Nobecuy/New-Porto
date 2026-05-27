import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const increment = req.query?.increment === "1";
  const key = "portfolio:views";

  try {
    const views = increment ? await kv.incr(key) : ((await kv.get(key)) ?? 0);
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json({ views: Number(views) });
  } catch (err) {
    // Kalau KV belum diset di Vercel, endpoint tetap balik respons yang jelas.
    return res.status(500).json({
      error: "KV_NOT_CONFIGURED",
      message:
        "Vercel KV belum terkonfigurasi. Aktifkan Storage → KV di Vercel, lalu set env vars KV_*. Lihat README.",
    });
  }
}

