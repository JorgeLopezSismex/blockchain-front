"use client";
import "bootstrap/dist/css/bootstrap.css";

import AdminNavBar from "../components/admin/AdminNavBar";

import styles from "./styles.module.css";
import { Container } from "react-bootstrap";

export default function AdminLayout({ children }) {
  return (
    <div className={styles.contentWrapper}>
      <AdminNavBar></AdminNavBar>
      <section className={styles.contentHeader}>{children}</section>
    </div>
  );
}
