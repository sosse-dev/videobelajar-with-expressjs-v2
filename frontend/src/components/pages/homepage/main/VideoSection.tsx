import { useSearchParams } from "react-router-dom";
import { TCategory, TfilteredCourses } from "@/type/types";
import TabsFilter from "./TabsFilter";
import { courses } from "@/data/courses";
import Videos from "./Videos";

export default function VideoSection() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  // Filtering courses with search param
  const filteredCourses = category
    ? courses.filter(
        (course) => course.category.toLowerCase() === category.toLowerCase()
      )
    : courses;

  return (
    <section className="w-full max-w-6xl">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4">
        Koleksi Video Pembelajaran Unggulan
      </h2>
      <p className="text-gray-600 mb-8">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      <TabsFilter categoryQuery={category as TCategory} />

      {/* Courses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Videos courses={filteredCourses as TfilteredCourses} />
      </div>
    </section>
  );
}
