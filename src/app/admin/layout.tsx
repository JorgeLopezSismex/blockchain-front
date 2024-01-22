"use client";
import "bootstrap/dist/css/bootstrap.css";

import AdminNavBar from "@/components/admin/AdminNavBar";

import styles from "./styles.module.css";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { apiFetch } from "@/helpers/api-fetch";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userEmail, setUserEmail] = useState("");
  const [userInitials, setUserInitials] = useState("");
  const [drawerOptions, setDrawetOptions] = useState([]);

  useEffect(() => {
    // Datos
    apiFetch("authorization/side-menu").then((res) => {
      if (res.success) {
        setUserEmail(res.data.email);
        setUserInitials(res.data.initials);
        setDrawetOptions(res.data.drawer);
      }
    });
  }, []);

  return (
    <div className={styles.contentWrapper}>
      <AdminNavBar
        email={userEmail}
        initials={userInitials}
        options={drawerOptions}
      ></AdminNavBar>
      <section className={styles.contentHeader}>{children}</section>
    </div>
  );
}
