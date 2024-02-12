export async function GET(req: Request, res: any) {
  fetch("http://localhost:3000/testing/certificate.json").then((response) => {
    return response.json();
  }).then(async (data) => {
    //@ts-ignore
    var certificate = new Certificate(certificateDefinition);
  })


  return new Response("Hola mundo");
}


/*

setLoadingCertificateData(true);
    // setLoadingVerification(true);
    // fetch("http://localhost:3000/testing/certificate.json")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then(async (data) => {
    //     //@ts-ignore
    //     let certificate = new Certificate(data, { locale: "es-ES" });
    //     //@ts-ignore
    //     await certificate.init();
    //     setSteps([]);
    //     //@ts-ignore
    //     const verification = await certificate.verify(
    //       ({ code, label, status, errorMessage }) => {
    //         console.log("Sub step update:", code, label, status, errorMessage);
    //         setSteps((steps: any) => [
    //           ...steps,
    //           {
    //             code: code,
    //             label: label,
    //             status: status,
    //             errorMessage: errorMessage,
    //           },
    //         ]);
    //       }
    //     );
    //     setLoadingVerification(false);
    //     setLoadingCertificateData(false);
    //     setCertificateData(certificate);
    //     setVerificationData(verification);
    //   });

*/