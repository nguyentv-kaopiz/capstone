import { Role } from "@/src/shared/config/roles";
import { IconType } from "react-icons";
import { FaHome, FaBook, FaUser } from "react-icons/fa";

interface Item {
    icon: IconType;
    text: string;
    id: number;
    path: string;
}

export interface MenuItem {
    role: Role;
    items: Item[];
}

export const menu_items: MenuItem[] = [
    {
        role: Role.Teacher,
        items: [
            {
                icon: FaBook,
                text: "Lịch thi",
                id: 1,
                path: "/teacher/exam-sessions"
            },
            {
                icon: FaBook,
                text: "Lớp học phần",
                id: 2,
                path: "/teacher/classes"
            },
            {
                icon: FaBook,
                text: "Môn học",
                id: 3,
                path: "/teacher/subjects"
            },
            {
                icon: FaBook,
                text: "Khung đề thi",
                id: 4,
                path: "/teacher/exam-templates"
            },
            {
                icon: FaBook,
                text: "Đề thi",
                id: 5,
                path: "/teacher/exams"
            }
        ]
    },
    {
        role: Role.Student,
        items: [
            {
                icon: FaHome,
                text: "Lịch thi",
                id: 1,
                path: "/student/exam-session"
            }
        ]
    },
    {
        role: Role.Admin,
        items: [
            {
                icon: FaUser,
                text: "Giảng viên",
                id: 1,
                path: "/admin/teachers"
            },
            {
                icon: FaBook,
                text: "Sinh viên",
                id: 2,
                path: "/admin/students"
            }
        ]
    }
];