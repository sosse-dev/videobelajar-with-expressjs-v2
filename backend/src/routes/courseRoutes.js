import express from "express";
import {
  getAllCourses,
  getCourseById,
  createOneCourse,
  editCourseById,
  deleteCourseById,
} from "../controllers/courseController.js";

const router = express.Router();

// GET all courses
router.get("/v1/course", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch courses.", error });
  }
});

// GET a course by ID
router.get("/v1/course/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const course = await getCourseById(id);
    if (!course) return res.status(404).json({ message: "Course not found." });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch course.", error });
  }
});

// POST a new course
router.post("/v1/course", async (req, res) => {
  try {
    const newCourse = await createOneCourse(req.body);
    res
      .status(201)
      .json({ message: "Course created successfully.", newCourse });
  } catch (error) {
    res.status(500).json({ message: "Failed to create course.", error });
  }
});

// PUT/PATCH to edit a course by ID
router.put("/v1/course/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = await editCourseById(id, req.body);
    res
      .status(200)
      .json({ message: "Course updated successfully.", updatedCourse });
  } catch (error) {
    res.status(500).json({ message: "Failed to update course.", error });
  }
});

router.patch("/v1/course/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCourse = await editCourseById(id, req.body);
    res
      .status(200)
      .json({ message: "Course updated successfully.", updatedCourse });
  } catch (error) {
    res.status(500).json({ message: "Failed to update course.", error });
  }
});

// DELETE a course by ID
router.delete("/v1/course/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCourseById(id);
    res.status(200).json({ message: "Course deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete course.", error });
  }
});

export default router;
