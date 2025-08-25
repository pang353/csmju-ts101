// class Course
class Course {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}

// class Student
class Student {
  studentID: string;
  name: string;
  courses: Course[];

  constructor(studentID: string, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

  // เพิ่มรายวิชาใหม่เข้าไป
  addCourse(course: Course): void {
    this.courses.push(course);
  }

  // คำนวณเกรดเฉลี่ยรวม
  getAverage(): number {
    if (this.courses.length === 0) return 0;
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return total / this.courses.length;
  }
}

// ----------------------
// ตัวอย่างการใช้งาน
const s1 = new Student("65001", "Alice");

s1.addCourse(new Course("Math", 3.5));
s1.addCourse(new Course("English", 4.0));
s1.addCourse(new Course("Computer", 2.5));

console.log(`${s1.name} เกรดเฉลี่ย = ${s1.getAverage().toFixed(2)}`);
// Output: Alice เกรดเฉลี่ย = 3.33
