"use client";

import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import AdminAlert from "@/components/admin/AdminAlert";
import AdminPageHeader from "@/components/admin/AdminPageHeader";

import { apiFetch } from "@/helpers/api-fetch";
import { ProfileData } from "@/types/profile";

export default function Admin() {
	// const [profile, setProfile] = useState(initialProfileData);
	// const [dataLoading, setDataLoading] = useState(true);

	useEffect(() => {
		// getProfile();
	}, []);

	// const getProfile = async () => {
	//   setDataLoading(true);
	//   const res = await apiFetch("authorization/profile?IssuerId=2");
	//   if (res.success) {
	//     console.log(res);
	//     setProfile(res.data[0]);
	//     console.log(res.data[0]);
	//     console.log("Verificación: ", profile.issuerVerificationStatusName);
	//   }
	// };

	return (
		<>
			<AdminPageHeader title="Dashboard">
				<Breadcrumb className="float-sm-right">
					<Link
						className="breadcrumb-item"
						href={"/admin"}
					>
						Inicio
					</Link>
					<Breadcrumb.Item active>Inicio</Breadcrumb.Item>
				</Breadcrumb>
			</AdminPageHeader>

			{/* <AdminAlert
        variant={
          profile.issuerVerificationStatusName === 0 ? "danger" : "success"
        }
        title="Estado de verificación"
        text={`El estado actual de verificación del usuario es: ${profile.issuerVerificationStatusName}`}
      /> */}

			{/* Falta la consulta a la membresía. */}
			<AdminAlert
				variant="warning"
				title="Membresía actual"
				text="Sin membresia activa."
			/>
		</>
	);
}
