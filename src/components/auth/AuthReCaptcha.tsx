import { Col, Row } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

export default function ReCaptcha({
	keyNumber,
	setFieldValue,
	setLoadingReCaptcha,
	errors,
}: {
	keyNumber: number;
	setFieldValue: any;
	setLoadingReCaptcha: any;
	errors: any;
}) {
	return (
		<Row className="mb-3">
			<Col
				xs={12}
				className="d-flex justify-content-center"
			>
				<ReCAPTCHA
					key={keyNumber}
					sitekey="6Lc-VN0oAAAAAP-HrhAyUBFylMjEQQk_fIdtVF6R"
					onChange={value => {
						setFieldValue("reCaptcha", value);
					}}
					asyncScriptOnLoad={() => {
						setLoadingReCaptcha(false);
					}}
				/>
			</Col>
			<Col className="d-flex justify-content-center">
				<p
					className="text-danger"
					style={{ fontSize: "0.875em" }}
				>
					{errors}
				</p>
			</Col>
		</Row>
	);
}
