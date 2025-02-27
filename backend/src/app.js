import courseRoutes from "./routes/courseRoutes.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

/*
{
  "title": "Belajar JavaScript Dasar",
  "description": "Kursus ini membahas dasar-dasar JavaScript untuk pemula dengan materi yang interaktif dan aplikatif.",
  "basePrice": 150000,
  "discount": 10.0,
  "language": "Bahasa Indonesia",
  "categoryId": 1,
  "tutorIds": [1, 2],
  "pretest": {
    "title": "Pretest JavaScript",
    "description": "Ujian pendahuluan untuk mengukur pengetahuan dasar sebelum memulai kursus.",
    "passingScore": 70
  },
  "modules": [
    {
      "title": "Pengenalan JavaScript",
      "description": "Materi pengenalan mengenai apa itu JavaScript dan sejarah singkatnya.",
      "orderIndex": 1
    },
    {
      "title": "Dasar-Dasar Sintaks",
      "description": "Pembahasan mengenai variabel, tipe data, dan operator dasar dalam JavaScript.",
      "orderIndex": 2
    },
    {
      "title": "Kontrol Alur Program",
      "description": "Mempelajari struktur kontrol seperti if, loop, dan switch case.",
      "orderIndex": 3
    }
  ]
}
*/

/*
{
  "title": "Belajar React dari Nol",
  "description": "Kursus ini akan mengajarkan dasar-dasar React hingga level mahir.",
  "basePrice": 500000,
  "discount": 100.00,
  "language": "Indonesia",
  "categoryId": 2
}
*/
