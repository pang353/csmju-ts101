class Course {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    this.name = name;
    this.grade = grade;
  }
}

class Student {
  studentID: string;
  name: string;
  courses: Course[];

  constructor(studentID: string, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  getAverage(): number {
    if (this.courses.length === 0) return 0;
    const total = this.courses.reduce((sum, c) => sum + c.grade, 0);
    return total / this.courses.length;
  }

  printInfo(): void {
    console.log(`รหัส: ${this.studentID}, ชื่อ: ${this.name}`);
    this.courses.forEach((c) =>
      console.log(`   วิชา: ${c.name}, เกรด: ${c.grade}`)
    );
    console.log(`   เกรดเฉลี่ย: ${this.getAverage().toFixed(2)}\n`);
  }
}

// ----------------------
// กำหนดนักศึกษา 3 คน คนละ 4 รายวิชา
const s1 = new Student("65001", "Alice");
s1.addCourse(new Course("Math", 3.5));
s1.addCourse(new Course("English", 4.0));
s1.addCourse(new Course("Computer", 2.5));
s1.addCourse(new Course("History", 3.0));

const s2 = new Student("65002", "Bob");
s2.addCourse(new Course("Math", 2.0));
s2.addCourse(new Course("English", 3.0));
s2.addCourse(new Course("Science", 2.5));
s2.addCourse(new Course("Music", 4.0));

const s3 = new Student("65003", "Charlie");
s3.addCourse(new Course("Math", 4.0));
s3.addCourse(new Course("English", 3.5));
s3.addCourse(new Course("Computer", 3.0));
s3.addCourse(new Course("Art", 3.5));

// รวมไว้ใน Array
const students: Student[] = [s1, s2, s3];

// ----------------------
// แสดงผลก่อนเพิ่มวิชา
console.log("=== ข้อมูลนักศึกษาก่อนเพิ่มรายวิชา ===");
students.forEach((s) => s.printInfo());

// ----------------------
// เพิ่มรายวิชาอีกคนละ 1 รายวิชา
s1.addCourse(new Course("PE", 3.5));
s2.addCourse(new Course("PE", 2.5));
s3.addCourse(new Course("PE", 4.0));

// ----------------------
// แสดงผลหลังเพิ่มวิชา
console.log("=== ข้อมูลนักศึกษาหลังเพิ่มรายวิชา ===");
students.forEach((s) => s.printInfo());
