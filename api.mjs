// Backend sederhana: simpan data siswa di Netlify Blobs. Kode guru diperiksa DI SERVER.
import { getStore } from "@netlify/blobs";
export default async (req) => {
  const b = await req.json();
  const st = getStore("siswa");
  const key = (b.nama || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
  let r = null;
  if (b.act === "ping") r = { ok: 1 };
  else if (b.act === "get" && key) r = await st.get(key, { type: "json" });
  else if (b.act === "save" && key) { await st.setJSON(key, b.data); r = { ok: 1 }; }
  else if (b.act === "all") {
    if (b.kode !== (Netlify.env.get("TEACHER_CODE") || "87654321")) return new Response("Kode salah", { status: 403 });
    const { blobs } = await st.list();
    r = await Promise.all(blobs.map((x) => st.get(x.key, { type: "json" })));
  }
  return Response.json(r);
};
export const config = { path: "/api" };
