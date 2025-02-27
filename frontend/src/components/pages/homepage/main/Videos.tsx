import formatNumberToK from "@/lib/formatNumberToK";
import { TfilteredCourses } from "@/type/types";

type VideoProps = {
  courses: TfilteredCourses;
};

export default function Videos({ courses }: VideoProps) {
  return (
    <>
      {courses?.map((course, _) => {
        return (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer active:shadow-xl hover:shadow-xl transition-shadow"
          >
            <img
              src={course.thumbnail}
              className="w-full h-48 object-cover"
              alt="Course"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src={course.instructor.avatar}
                  className="w-10 h-10 rounded-lg"
                  alt="Instructor"
                />
                <div>
                  <p className="font-medium text-gray-900">
                    {course.instructor.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {course.instructor.position}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#FFBD3A]">
                    {/* Membualtkan Angka Rating */}
                    {[...Array(Math.round(course.rating))].map((_, i) => (
                      <span key={i} className="fa fa-star checked" />
                    ))}
                    {/* Dikurangkan dengan 5 untuk mencari nilai sisa rating */}
                    {[...Array(5 - Math.round(course.rating))].map((_, i) => (
                      <span key={i} className="fa fa-star text-gray-300" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {course.rating} ({course.totalReviews})
                  </span>
                </div>
                <span className="text-xl font-semibold text-[#3ECF4C]">
                  Rp {formatNumberToK(course.price ?? 0)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
